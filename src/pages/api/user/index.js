import prisma from '@/lib/prisma'

export default async function handler(req, res) {
  const { method, body } = req

  const { user, quiz } = body

  const userData = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  })

  if (method === 'GET') {
    return res
      .status(200)
      .json({ message: 'GET request received', qui: session })
  }

  if (method === 'POST') {
    const quizBody = {
      title: quiz.title,
      description: quiz.description,
      quizLength: quiz.questions.length,
      userId: userData.id,
      category: quiz.category,
    }

    const quizCreated = await prisma.quiz.create({
      data: quizBody,
    })

    const quizId = quizCreated.id

    quiz.questions.forEach(async (question) => {
      const questionBody = {
        question: question.question,
        quizId: quizId,
      }

      const questionCreate = await prisma.questions.create({
        data: questionBody,
      })

      const questionId = questionCreate.id

      question.answers.forEach(async (answer) => {
        const answerBody = {
          answer: answer.answer,
          questionId: questionId,
          isCorrect: answer.isCorrect,
          quizId: quizId,
        }
        await prisma.answers.create({
          data: answerBody,
        })
      })
    })

    return res.status(200).json({
      message: 'POST request received',
    })
  }
}
