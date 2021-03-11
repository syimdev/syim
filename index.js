#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "다음으로 무엇을 하시겠습니까?",
        choices: [
            {
                name: `${chalk.green.bold("이메일")} 보내기`,
                value: () => {
                    open("mailto:syim@syim.dev");
                    console.log("\n완료. 메일을 작성해 주세요!\n");
                }
            },
            {
                name: "나가기",
                value: () => {
                    console.log("안녕히 가세요!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("        임성엽(Seong-Yeob Im)"),
    work: `${chalk.white("소프트웨어 엔지니어")} ${chalk
        .hex("#FFE66D").bold("@Vogle")} ${chalk
            .hex("#FF6E2F").bold("@Biddingo")} ${chalk
                .hex("#0081bd").bold("@G1Commerce")}`,
    blog: chalk.gray("https://dev.to/") + chalk.whiteBright("Allan"),
    twitter: chalk.gray("https://twitter.com/") + chalk.cyan("AllanLogs"),
    github: chalk.gray("https://github.com/") + chalk.green("syimdev"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("AllanIm"),
    web: chalk.cyan("https://syim.dev"),
    npx: chalk.red("npx") + " " + chalk.white("syim"),

    labelWork: chalk.white.bold("     하는일:"),
    labelBlog: chalk.white.bold("     블로그:"),
    labelTwitter: chalk.white.bold("     트위터:"),
    labelGitHub: chalk.white.bold("     깃허브:"),
    labelLinkedIn: chalk.white.bold("   링크드인:"),
    labelWeb: chalk.white.bold("   웹사이트:"),
    labelCard: chalk.white.bold("       카드:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        // `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic("프로그래밍, 설계, 여행, 사진, 잔잔한 음악, 판타지 영화, 비디오 게임, 퍼즐, 예술,")}`,
        `${chalk.italic("좋은 음식과 의미 있는 대화에 흥미를 가지고 있습니다.")}`,
        `${chalk.italic("또한, 영감을 떠올리는 것, 긍적적으로 생각 하는 것, 가치 있는 것을 위해 일하는것,")}`,
        `${chalk.italic("그리고, 무엇이든 최고로 이끌어내는 나의 동료들과 함께 하는것을 좋아 합니다.")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "double",
        borderColor: "yellow"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());

