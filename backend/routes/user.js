const express = require("express");
const { PrismaClient } = require("@prisma/client");

const router = express.Router();

const prisma = new PrismaClient();

// 신규 유저 생성
router.post("/", async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        account: "abcd",
      },
    });

    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.error(error);
  }
});

// 유저 조회
router.get("/", async (req, res) => {
  try {
    const { account } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        account,
      },
    });

    if (!user) {
      return res.status(400).json({
        ok: false,
        error: "Not exist account.",
      });
    }

    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
