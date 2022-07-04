const ExcelJS = require("exceljs");

function handleText(value) {
  if (value instanceof Object) {
    let str = "";
    value.richText.forEach((e) => {
      str += e.text;
    });
    return str;
  }
  return value;
}

function fixed2(num) {
  return Math.floor(num * 100) / 100;
}
function fixed3(num) {
  return Math.floor(num * 1000) / 1000;
}

/**
 *
 * @param {{message:{gradeAndClass:String,IdNum:String,name:String,politicStatus:String},moral:{addItem:Array<Array>,minusItem:Array<Array>,sum:int,total:int},sport:{baseItem:Array<Array>,addItem:Array<Array>,minusItem:Array<Array>,sum:int,total:int,base:int},study:{item:Array<Array>,sum:int},ability:{partOne:Array<Array>,partTwo:Array<Array>,partThree:Array<Array>,sum:int},setting:{moral:int,study:int,sport:int,ability:int}}} dataObj
 * @param {String} filePath
 */
export async function spawnResultTableFromDataObj(dataObj, filePath,modalPath) {
  const { ability, message, moral, sport, study, setting } = dataObj;
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(modalPath);
  const sheet = workbook.getWorksheet(1);
  const title = sheet.getCell(1, 1);
  title.value = `${
    message.collegeName ? message.collegeName : "未填写"
  }学生个人学年综合素质测评评分表`;
  const messageSheet = sheet.getCell(3, 1);
  messageSheet.value = `专业班级：${message.gradeAndClass} 学号：${message.IdNum} 姓名：${message.name} 政治面貌：${message.politicStatus} 学生本人确认签名：    `;
  const moralAdd = new Array(9).fill(0).map((v) => new Array(2).fill(0));
  moralAdd[0][0] = sheet.getCell(7, 2);
  moralAdd[1][0] = sheet.getCell(8, 2);
  moralAdd[2][0] = sheet.getCell(9, 2);
  moralAdd[3][0] = sheet.getCell(7, 5);
  moralAdd[4][0] = sheet.getCell(8, 5);
  moralAdd[5][0] = sheet.getCell(9, 5);
  moralAdd[6][0] = sheet.getCell(7, 8);
  moralAdd[7][0] = sheet.getCell(8, 8);
  moralAdd[8][0] = sheet.getCell(9, 8);
  moralAdd[0][1] = sheet.getCell(7, 3);
  moralAdd[1][1] = sheet.getCell(8, 3);
  moralAdd[2][1] = sheet.getCell(9, 3);
  moralAdd[3][1] = sheet.getCell(7, 6);
  moralAdd[4][1] = sheet.getCell(8, 6);
  moralAdd[5][1] = sheet.getCell(9, 6);
  moralAdd[6][1] = sheet.getCell(7, 9);
  moralAdd[7][1] = sheet.getCell(8, 9);
  moralAdd[8][1] = sheet.getCell(9, 9);
  for (let i = 0; i < moralAdd.length; i++) {
    const [reason, point] = moralAdd[i];
    const [name, inputReason, inputPoint] = moral.addItem[i];
    reason.value = inputReason;
    point.value = inputPoint;
  }
  const moralMinus = new Array(6).fill(0).map((v) => new Array(2).fill(0));
  moralMinus[0][0] = sheet.getCell(11, 2);
  moralMinus[1][0] = sheet.getCell(12, 2);
  moralMinus[2][0] = sheet.getCell(11, 5);
  moralMinus[3][0] = sheet.getCell(12, 5);
  moralMinus[4][0] = sheet.getCell(11, 8);
  moralMinus[5][0] = sheet.getCell(12, 8);
  moralMinus[0][1] = sheet.getCell(11, 3);
  moralMinus[1][1] = sheet.getCell(12, 3);
  moralMinus[2][1] = sheet.getCell(11, 6);
  moralMinus[3][1] = sheet.getCell(12, 6);
  moralMinus[4][1] = sheet.getCell(11, 9);
  moralMinus[5][1] = sheet.getCell(12, 9);
  for (let i = 0; i < moralMinus.length; i++) {
    const [reason, point] = moralMinus[i];
    const [name, inputReason, inputPoint] = moral.minusItem[i];
    reason.value = inputReason;
    point.value = inputPoint;
  }
  const moralShowMSG = sheet.getCell(13, 1);
  moralShowMSG.value = `德育加减分总计=（ ${moral.sum} ）                德育总分=基础分70+加减分总计（ ${moral.sum} ） =（ ${moral.total} ）`;
  const sportAdd = new Array(2).fill(0).map((v) => new Array(2).fill(0));
  sportAdd[0][0] = sheet.getCell(17, 2);
  sportAdd[1][0] = sheet.getCell(17, 5);
  sportAdd[0][1] = sheet.getCell(17, 3);
  sportAdd[1][1] = sheet.getCell(17, 6);
  for (let i = 0; i < sportAdd.length; i++) {
    const [reason, point] = sportAdd[i];
    const [name, inputReason, inputPoint] = sport.addItem[i];
    reason.value = inputReason;
    point.value = inputPoint;
  }
  const sportMinus = new Array(3).fill(0).map((v) => new Array(2).fill(0));
  sportMinus[0][0] = sheet.getCell(17, 8);
  sportMinus[1][0] = sheet.getCell(18, 8);
  sportMinus[2][0] = sheet.getCell(19, 8);
  sportMinus[0][1] = sheet.getCell(17, 9);
  sportMinus[1][1] = sheet.getCell(18, 9);
  sportMinus[2][1] = sheet.getCell(19, 9);
  for (let i = 0; i < sportMinus.length; i++) {
    const [reason, point] = sportMinus[i];
    const [name, inputReason, inputPoint] = sport.minusItem[i];
    reason.value = inputReason;
    point.value = inputPoint;
  }
  const sportShowMSG = sheet.getCell(20, 1);
  sportShowMSG.value = `体育加减分总计=(${fixed2(
    sport.sum
  )}）     体育总分=基础分（ ${fixed2(sport.base)} ） +加减分总计（ ${fixed2(
    sport.sum
  )} ） =（ ${fixed2(sport.total)} ）`;
  const sportShowTotalMSG = sheet.getCell(21, 1);
  sportShowTotalMSG.value = `体育基础分=(学生体质健康测试 ${fixed2(
    sport.baseItem[0][1]
  )} *60% + 专业考试成绩 ${fixed2(
    sport.baseItem[1][1]
  )} *40%)*70% + 课外锻炼分 ${fixed2(sport.baseItem[2][1])} *30%= ${fixed2(
    sport.base
  )}`;
  const studyShowMSG = sheet.getCell(26, 1);
  studyShowMSG.value = `智育总分=（${fixed2(study.sum)}）`;
  const inputAbilityAdd = [...ability.partOne, ...ability.partTwo];
  const abilityAdd = new Array(10);
  // 技能证书
  abilityAdd[0] = new Array(5).fill(0);
  abilityAdd[0] = abilityAdd[0].map((v, i) => {
    return [sheet.getCell(i + 29, 2), sheet.getCell(i + 29, 3)];
  });
  // 社会实践
  abilityAdd[1] = new Array(5).fill(0);
  abilityAdd[1] = abilityAdd[1].map((v, i) => {
    return [sheet.getCell(i + 29, 5), sheet.getCell(i + 29, 6)];
  });
  // 表彰奖励
  abilityAdd[2] = new Array(5).fill(0);
  abilityAdd[2] = abilityAdd[2].map((v, i) => {
    return [sheet.getCell(i + 29, 8), sheet.getCell(i + 29, 9)];
  });
  // 学科竞赛科技活动
  abilityAdd[3] = new Array(11).fill(0);
  abilityAdd[3] = abilityAdd[3].map((v, i) => {
    return [sheet.getCell(i + 34, 2), sheet.getCell(i + 34, 3)];
  });
  // 文体竞赛
  abilityAdd[4] = new Array(6).fill(0);
  abilityAdd[4] = abilityAdd[4].map((v, i) => {
    return [sheet.getCell(i + 34, 5), sheet.getCell(i + 34, 6)];
  });
  // 学干任职
  abilityAdd[5] = new Array(4).fill(0);
  abilityAdd[5] = abilityAdd[5].map((v, i) => {
    return [sheet.getCell(i + 34, 8), sheet.getCell(i + 34, 9)];
  });
  // 科研论文
  abilityAdd[6] = new Array(2).fill(0);
  abilityAdd[6] = abilityAdd[6].map((v, i) => {
    return [sheet.getCell(i + 38, 8), sheet.getCell(i + 38, 9)];
  });
  // 文章、征文、消息、简讯发表在校级刊物
  abilityAdd[7] = new Array(5).fill(0);
  abilityAdd[7] = abilityAdd[7].map((v, i) => {
    return [sheet.getCell(i + 40, 5), sheet.getCell(i + 40, 6)];
  });
  // 各类文化活动
  abilityAdd[8] = new Array(4).fill(0);
  abilityAdd[8] = abilityAdd[8].map((v, i) => {
    return [sheet.getCell(i + 40, 8), sheet.getCell(i + 40, 9)];
  });
  // 其他情况
  abilityAdd[9] = new Array(1).fill(0);
  abilityAdd[9] = abilityAdd[9].map((v, i) => {
    return [sheet.getCell(i + 44, 8), sheet.getCell(i + 44, 9)];
  });
  for (let i = 0; i < abilityAdd.length; i++) {
    inputAbilityAdd[i][1].forEach((arr, arri) => {
      const [inputReason, inputPoint, inputId] = arr;
      const [reason, point] = abilityAdd[i][arri];
      reason.value = inputReason;
      point.value = inputPoint;
    });
  }
  const inputAbilityMinus = [...ability.partThree];
  const abilityMinus = new Array(1);
  // 听取讲座
  abilityMinus[0] = new Array(1).fill(0);
  abilityMinus[0] = abilityMinus[0].map((v, i) => {
    return [sheet.getCell(i + 46, 2), sheet.getCell(i + 46, 3)];
  });
  for (let i = 0; i < abilityMinus.length; i++) {
    inputAbilityMinus[i][1].forEach((arr, arri) => {
      const [inputReason, inputPoint, inputId] = arr;
      const [reason, point] = abilityAdd[i][arri];
      reason.value = inputReason;
      point.value = inputPoint;
    });
  }
  const abilityShowMSG = sheet.getCell(47, 1);
  abilityShowMSG.value = `能力加减分总计=  （ ${
    ability.sum
  } ）         能力总分=基础分20+能力加减分总计（ ${ability.sum} ） =（ ${
    +ability.sum + 20
  } ）`;
  const result =
    moral.total * (setting.moral / 100) +
    study.sum * (setting.study / 100) +
    sport.total * (setting.sport / 100) +
    (+ability.sum + 20) * (setting.ability / 100);

  const totalShowMSG = sheet.getCell(48, 1);
  totalShowMSG.value = `综测总分=德育总分（${moral.total}）*${
    setting.moral
  }%+智育总分（${fixed2(study.sum)}）*${setting.study}%+体育总分（${fixed2(
    sport.total
  )}）*${setting.sport}%+能力总分（${+ability.sum + 20}）*${
    setting.ability
  }%=${fixed3(result)}`;
  await workbook.xlsx.writeFile(filePath);
}

export async function parseTableToDataObj(filePath) {
  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const sheet = workbook.getWorksheet(1);

    const message = {};

    const title = sheet.getCell(1, 1);
    try {
      message.collegeName = handleText(title.value).match(
        /(.+)学生个人学年综合素质测评评分表/
      )[1];
    } catch (error) {
      message.collegeName = "学生个人学年综合素质测评评分表";
    }
    const messageSheet = sheet.getCell(3, 1);
    const parseMessage = handleText(messageSheet.value).match(
      /专业班级：(.*)学号：(.*)姓名：(.*)政治面貌：(.*)学生本人确认签名：.*/
    );
    message.gradeAndClass = parseMessage[1].trim();
    message.IdNum = parseMessage[2].trim();
    message.name = parseMessage[3].trim();
    message.politicStatus = parseMessage[4].trim();

    const moral = {
      addItem: [
        ["党员、预备党员", null, null],
        ["入党积极分子", null, null],
        ["学生手册成绩", null, null],
        ["好人好事奖励", null, null],
        ["公益活动", null, null],
        ["其他情况", null, null],
        ["宿舍表现", null, null],
        ["思想政治理论课", null, null],
        ["三早一晚出勤率", null, null],
      ],
      minusItem: [
        ["违规违纪处分", null, null],
        ["思想政治理论课", null, null],
        ["恶意拖欠学费", null, null],
        ["学期宿舍评比", null, null],
        ["三早一晚缺勤", null, null],
        ["公益活动", null, null],
      ],
      sum: 0,
      total: 70,
    };

    let addMoralSum = 0;
    const moralAdd = new Array(9).fill(0).map((v) => new Array(2).fill(0));
    moralAdd[0][0] = sheet.getCell(7, 2);
    moralAdd[1][0] = sheet.getCell(8, 2);
    moralAdd[2][0] = sheet.getCell(9, 2);
    moralAdd[3][0] = sheet.getCell(7, 5);
    moralAdd[4][0] = sheet.getCell(8, 5);
    moralAdd[5][0] = sheet.getCell(9, 5);
    moralAdd[6][0] = sheet.getCell(7, 8);
    moralAdd[7][0] = sheet.getCell(8, 8);
    moralAdd[8][0] = sheet.getCell(9, 8);
    moralAdd[0][1] = sheet.getCell(7, 3);
    moralAdd[1][1] = sheet.getCell(8, 3);
    moralAdd[2][1] = sheet.getCell(9, 3);
    moralAdd[3][1] = sheet.getCell(7, 6);
    moralAdd[4][1] = sheet.getCell(8, 6);
    moralAdd[5][1] = sheet.getCell(9, 6);
    moralAdd[6][1] = sheet.getCell(7, 9);
    moralAdd[7][1] = sheet.getCell(8, 9);
    moralAdd[8][1] = sheet.getCell(9, 9);
    for (let i = 0; i < moralAdd.length; i++) {
      const [reason, point] = moralAdd[i];
      const [name, inputReason, inputPoint] = moral.addItem[i];
      moral.addItem[i] = [name, reason.value, point.value && +point.value];
      if (!isNaN(+point.value)) {
        addMoralSum += +point.value;
      }
    }

    let minusMoralSum = 0;
    const moralMinus = new Array(6).fill(0).map((v) => new Array(2).fill(0));
    moralMinus[0][0] = sheet.getCell(11, 2);
    moralMinus[1][0] = sheet.getCell(12, 2);
    moralMinus[2][0] = sheet.getCell(11, 5);
    moralMinus[3][0] = sheet.getCell(12, 5);
    moralMinus[4][0] = sheet.getCell(11, 8);
    moralMinus[5][0] = sheet.getCell(12, 8);
    moralMinus[0][1] = sheet.getCell(11, 3);
    moralMinus[1][1] = sheet.getCell(12, 3);
    moralMinus[2][1] = sheet.getCell(11, 6);
    moralMinus[3][1] = sheet.getCell(12, 6);
    moralMinus[4][1] = sheet.getCell(11, 9);
    moralMinus[5][1] = sheet.getCell(12, 9);
    for (let i = 0; i < moralMinus.length; i++) {
      const [reason, point] = moralMinus[i];
      const [name, inputReason, inputPoint] = moral.minusItem[i];
      moral.minusItem[i] = [name, reason.value, point.value && +point.value];
      if (!isNaN(+point.value)) {
        minusMoralSum += Math.abs(+point.value);
      }
    }

    moral.sum = addMoralSum - minusMoralSum;
    moral.total += moral.sum;

    const sport = {
      baseItem: [
        ["学生体质健康测试（体测成绩）", null],
        ["专业考试成绩（体育课考试成绩）", null],
        ["课外锻炼分", null],
      ],
      addItem: [
        ["体测成绩优秀", null, null],
        ["课外锻炼出勤率", null, null],
      ],
      minusItem: [
        ["体测成绩不及格", null, null],
        ["体育课成绩不合格", null, null],
        ["课外锻炼出勤率", null, null],
      ],
      sum: null,
      total: null,
      base: null,
    };

    const sportAdd = new Array(2).fill(0).map((v) => new Array(2).fill(0));
    sportAdd[0][0] = sheet.getCell(17, 2);
    sportAdd[1][0] = sheet.getCell(17, 5);
    sportAdd[0][1] = sheet.getCell(17, 3);
    sportAdd[1][1] = sheet.getCell(17, 6);

    for (let i = 0; i < sportAdd.length; i++) {
      const [reason, point] = sportAdd[i];
      sport.addItem[i] = [
        sport.addItem[i][0],
        reason.value,
        point.value && +point.value,
      ];
    }
    const sportMinus = new Array(3).fill(0).map((v) => new Array(2).fill(0));
    sportMinus[0][0] = sheet.getCell(17, 8);
    sportMinus[1][0] = sheet.getCell(18, 8);
    sportMinus[2][0] = sheet.getCell(19, 8);
    sportMinus[0][1] = sheet.getCell(17, 9);
    sportMinus[1][1] = sheet.getCell(18, 9);
    sportMinus[2][1] = sheet.getCell(19, 9);
    for (let i = 0; i < sportMinus.length; i++) {
      const [reason, point] = sportMinus[i];
      sport.minusItem[i] = [
        sport.minusItem[i][0],
        reason.value,
        point.value && +point.value,
      ];
    }

    const sportShowBaseMSG = sheet.getCell(21, 1);
    const parseSportShowBaseMSG = handleText(sportShowBaseMSG.value).match(
      /体育基础分=\(学生体质健康测试\s*(.*)\*60%.+专业考试成绩(.*)\*40%.+课外锻炼分(.*)\*30%.*/
    );
    sport.baseItem[0][1] = +parseSportShowBaseMSG[1].trim();
    sport.baseItem[1][1] = +parseSportShowBaseMSG[2].trim();
    sport.baseItem[2][1] = +parseSportShowBaseMSG[3].trim();

    const study = {
      item: [[null, null, null, "id"]],
      sum: 0,
    };
    const studyShowMSG = sheet.getCell(26, 1);
    const parseStudyShowMSG = handleText(studyShowMSG.value).match(
      /智育总分\s*=\s*（(.*)）/
    );
    study.item[0] = ["总成绩", +parseStudyShowMSG[1].trim(), 1, "id"];
    study.sum = +parseStudyShowMSG[1].trim();

    const ability = {
      partOne: [],
      partTwo: [],
      partThree: [["听取讲座", [], 1]],
      sum: 0,
    };
    const abilityAddModel = [
      ["技能证书", [], 5],
      ["社会实践", [], 5],
      ["表彰奖励", [], 5],
      ["学科竞赛科技活动", [], 11],
      ["文体竞赛", [], 6],
      ["文章、征文、消息、简讯发表在校级刊物", [], 5],
      ["学干任职", [], 4],
      ["发表科研论文", [], 2],
      ["各类文化活动", [], 4],
      ["其他情况", [], 1],
    ];
    let abilityAddSum = 0;
    const abilityAdd = new Array(10);
    // 技能证书
    abilityAdd[0] = new Array(5).fill(0);
    abilityAdd[0] = abilityAdd[0].map((v, i) => {
      return [sheet.getCell(i + 29, 2), sheet.getCell(i + 29, 3)];
    });
    // 社会实践
    abilityAdd[1] = new Array(5).fill(0);
    abilityAdd[1] = abilityAdd[1].map((v, i) => {
      return [sheet.getCell(i + 29, 5), sheet.getCell(i + 29, 6)];
    });
    // 表彰奖励
    abilityAdd[2] = new Array(5).fill(0);
    abilityAdd[2] = abilityAdd[2].map((v, i) => {
      return [sheet.getCell(i + 29, 8), sheet.getCell(i + 29, 9)];
    });
    // 学科竞赛科技活动
    abilityAdd[3] = new Array(11).fill(0);
    abilityAdd[3] = abilityAdd[3].map((v, i) => {
      return [sheet.getCell(i + 34, 2), sheet.getCell(i + 34, 3)];
    });
    // 文体竞赛
    abilityAdd[4] = new Array(6).fill(0);
    abilityAdd[4] = abilityAdd[4].map((v, i) => {
      return [sheet.getCell(i + 34, 5), sheet.getCell(i + 34, 6)];
    });
    // 学干任职
    abilityAdd[5] = new Array(4).fill(0);
    abilityAdd[5] = abilityAdd[5].map((v, i) => {
      return [sheet.getCell(i + 34, 8), sheet.getCell(i + 34, 9)];
    });
    // 科研论文
    abilityAdd[6] = new Array(2).fill(0);
    abilityAdd[6] = abilityAdd[6].map((v, i) => {
      return [sheet.getCell(i + 38, 8), sheet.getCell(i + 38, 9)];
    });
    // 文章、征文、消息、简讯发表在校级刊物
    abilityAdd[7] = new Array(5).fill(0);
    abilityAdd[7] = abilityAdd[7].map((v, i) => {
      return [sheet.getCell(i + 40, 5), sheet.getCell(i + 40, 6)];
    });
    // 各类文化活动
    abilityAdd[8] = new Array(4).fill(0);
    abilityAdd[8] = abilityAdd[8].map((v, i) => {
      return [sheet.getCell(i + 40, 8), sheet.getCell(i + 40, 9)];
    });
    // 其他情况
    abilityAdd[9] = new Array(1).fill(0);
    abilityAdd[9] = abilityAdd[9].map((v, i) => {
      return [sheet.getCell(i + 44, 8), sheet.getCell(i + 44, 9)];
    });
    for (let i = 0; i < abilityAdd.length; i++) {
      for (let j = 0; j < abilityAdd[i].length; j++) {
        const [reason, point] = abilityAdd[i][j];
        abilityAddModel[i][1].push([
          reason.value,
          point.value && +point.value,
          `parseabilityaddid${i}${j}`,
        ]);
        if (!isNaN(+point.value)) {
          abilityAddSum += Math.abs(+point.value);
        }
      }
    }

    const abilityMinus = new Array(1);
    // 听取讲座
    abilityMinus[0] = new Array(1).fill(0);
    abilityMinus[0] = abilityMinus[0].map((v, i) => {
      return [sheet.getCell(i + 46, 2), sheet.getCell(i + 46, 3)];
    });
    for (let i = 0; i < abilityMinus.length; i++) {
      for (let j = 0; j < abilityMinus[i].length; j++) {
        const [reason, point] = abilityMinus[i][j];
        ability.partThree[i][1].push([
          reason.value,
          point.value && +point.value,
          `parseabilityminusid${i}${j}`,
        ]);
        if (!isNaN(+point.value)) {
          abilityAddSum -= Math.abs(+point.value);
        }
      }
    }
    ability.sum = abilityAddSum;
    ability.partOne = abilityAddModel.slice(0, 3);
    ability.partTwo = abilityAddModel.slice(3, 10);

    return {
      ability,
      message,
      moral,
      sport,
      study,
    };
  } catch (error) {
    console.log(error);
    return false;
  }
}

