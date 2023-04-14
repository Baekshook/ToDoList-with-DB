const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const client = new PrismaClient();

// 투두 생성
router.post("/", async (req, res) => {
  try {
    const { todo, userId } = req.body;

    if (!todo) {
      return res.status(400).json({ ok: false, error: "Not exist todo." });
    }
    if (!userId) {
      return res.status(400).json({ ok: false, error: "Not exist userId." });
    }

    const user = await client.user.findUnique({
      where: {
        id: parseInt(userId),
      },
    });

    if (!user) {
      return res.status(400).json({ ok: false, error: "Not exist user." });
    }

    const newTodo = await client.todo.create({
      data: {
        todo,
        idDone: false,
        userId: user.id,
      },
    });

    res.json({ok: false, todo: newTodo});
  } catch (error) {
    console.error(error);
  }
});
// 투두 조회
// 투두 완료
// 투두 삭제

module.exports = router;
