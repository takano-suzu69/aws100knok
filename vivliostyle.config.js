import { VFM } from "@vivliostyle/vfm";

const isPrint = process.argv.includes("print.pdf");

const def = {
  //デフォルト２分でタイムアウトしちゃうので、ローカルコンパイル対応のため追加
  timeout: 300000,   // 5 分
  
  title: "AWS100kno", // populated into `publication.json`, default to `title` of the first entry or `name` in `package.json`.
  author: "oyakata <oyakata2438@gmail.com>", // default to `author` in `package.json` or undefined.
  language: "ja", // default to undefined.
  size: "JIS-B5", // JIS-B5: 教科書サイズ、A5: 最近流行りの小さいサイズの技術書
  theme: [
    "./fonts",
    "./theme-nice-techbook2",
  ],
  entry: [
    // 表紙
    // { rel: "cover" },

    // 扉
    // "00-title.md",
    "title.html",
    // 前書き
    "01-preface.md",

    // 目次
    { rel: "contents" },

    // 第一部 書き方の例＋並べる前はここへ。
    "part-1-service.md",
    "chap-sour23-lambda.md",
	"part-2-usage.md",
    "chap-kazzpapa3-aws-technical-support.md",
	"part-3-certification.md",
	"chap-yuj1osm-team.md",
	"part-4-community.md",
    "chap-atsumi-community.md",
    "chap-kazzpapa3-aws-cloudtrail.md",
    "chap-whitebird_sp-amazon-vpc.md",
    "chap-mob_engineer-aws-resilience-hub.md",
    "chap-takano-gizyutudouzin.md",
    // "chap-iwamot-hiring-process.md",
    // "chap-kazzpapa3-aws-cli.md",
    // "chap-otsuka-certification.md",
    // "chap-otsuka-cloudshell.md",
    // "chap-otsuka-polly.md",
    // "chap-ikngm-cdk.md",
    // "chap-mkdev10-amplify.md",
    // "chap-kasacchiful-stepfunctions.md",
    // "chap-mob_engineer-jaws-community-life.md",
    // "chap-hiyokoinfraengineer.md",
    // "chap-takano-org.md",
    // "chap-beli-epic.md",
    // "chap-beli-cert.md",
    // "chap-beli-gold-jacket.md",
	// "chap-naosan-01infrastructurecomposer.md",
	// "chap-naosan-02iacgenerator.md",
	// "chap-otsukit-cloudformation.md",
	// "chap-naosan-03awsexams.md",
	// "chap-naosan-04communitybuilder.md",
	// "chap-naosan-05jawsnagoya.md",
	// "chap-naosan-06jawsnasa.md",
	// "chap-shfk2-fis.md",
	// "chap-naosan-07awssummit.md",
	// "chap-naosan-08wellarchitectedframework.md",
	// "chap-naosan-09awsblog.md",
	// "chap-naosan-10awsblackbelt.md",
	// "chap-naosan-11awsdocument.md",
	// "chap-naosan-12handson.md",
	// "chap-naosan-13mitsumori.md",
	// "chap-naosan-14amazonqvscode.md",
	// "chap-naosan-15gluestudio.md",
	// "chap-naosan-16stepfunctions.md",
	// "chap-naosan-17browserextends.md",
	"chap-naosan-18drawio.md",
	"chap-naosan-19icons.md",
	"chap-naosan-20connpass.md",
  	"chap-takano-game.md",
	"chap-oyakata-greetingcard.md",
	"chap-yakumo-neptune.md",
  	"chap-terusaku-ArchitectureCenter.md",	//47
	"chap-amixedcolor-aws-sum.md",
	"chap-mob_engineer-01soa.md",
	"chap-mob_engineer-02aif.md",
	"chap-mob_engineer-03mls.md",
	"chap-mob_engineer-04mla.md",
	"chap-mob_engineer-05scs.md",
	"chap-mob_engineer-06ans.md",
	"chap-mob_engineer-08dop.md",
	"chap-mob_engineer-07sap.md",
	"chap-mob_engineer-09dea.md",
	"chap-mob_engineer-10dva.md",
  	"chap-aikawa-certification.md",
    "chap-fossamagna-amplify-hosting.md",
    "chap-fossamagna-lambda-web-adapter.md",
	"chap-naosan-21iac.md",
	"chap-naosan-22pac.md",
	"chap-naosan-23codedeploy.md",
	"chap-naosan-24codepipeline.md",
  	"chap-harukotanabe-aws_certification.md",   //修正待ちアリ
	"chap-naosan-25s3lifecycle.md",
	"chap-naosan-26costcut.md",
	"chap-naosan-27sfparallel.md",
	"chap-naosan-28eventbridge.md",
	"chap-naosan-29drift.md",
	"chap-naosan-30github.md",
	// "chap-mob_engineer-water-mark.md",
	// "chap-mob_engineer-security-group-type.md",
	// "chap-mob_engineer-ec2-global-group.md",
	// "chap-amixedcolor-aws.md",
	// "chap-amixedcolor-amplify-gen2.md",
	// "chap-naosan-31skillbuilder.md",
	// "chap-akira-sato22.md",
	// "chap-kkimura-ug-kyushu.md",
	// "chap-ryder472-guardduty.md",
	// "chap-ryder472-cert-scs.md",
	// "chap-shfk2-cloudwatchOI.md",
  	// "chap-harukotanabe-jaws_sainokuni.md",
    // "chap-kazzpapa3-jawsug.md",
    // "chap-p0n-s3.md",
    // "chap-ashirasu-gameday.md",
	// "chap-hirosys-support.md",
  	// "chap-hibiki-iic.md",
  	// "chap-whitebird_sp-s3-design-principles.md",
	// "chap-naosan-32blog.md",
	// "chap-naosan-33dev.md",
	// "chap-naosan-34developersio.md",
	// "chap-naosan-35swblog.md",
	// "chap-naosan-36speakerdeck.md",
	// "chap-naosan-37notebooklm.md",
	// "chap-naosan-38playle.md",
	// "chap-naosan-39linkedin.md",
	// "chap-naosan-40jawslunch.md",
	// "chap-naosan-41jawssyukan.md",
	// "chap-naosan-42edtech.md",
	// "chap-naosan-43builderscard.md",
	// "chap-otsukit-communicationtest.md",
	// "chap-otsukit-reinvent.md",
	// "chap-siba-operation.md",
	// "chap-fukuchi-bedrock-custom-orchestration.md",
	// "chap-nyagoro-AWS-S3.md",

    // 後書き
    "90-postscript.md",
    "98-authors.md",
    "99-colophon.md",
  ],
  entryContext: "./src",

  // output: [ // path to generate draft file(s). default to '{title}.pdf'
  //   './output.pdf', // the output format will be inferred from the name.
  //   {
  //     path: './book',
  //     format: 'webpub',
  //   },
  // ],
  workspaceDir: ".vivliostyle", // directory which is saved intermediate files.
  toc: {
    title: "目次", // title of table of contents. default to 'Contents'.
    sectionDepth: 2,
    includeCover: false, // include cover page in table of contents. default to 'false'.
  },
  // cover: './cover.png', // cover image. default to undefined.
  vfm: {
    // options of VFM processor
    //   hardLineBreaks: true, // converts line breaks of VFM to <br> tags. default to 'false'.
    //   disableFormatHtml: true, // disables HTML formatting. default to 'false'.
  },
};

if (isPrint) {
  def.theme = [
    ...def.theme,
    // グレースケール印刷可能なPDF
    "./theme-nice-techbook2/theme-print-pdf.css",
  ];
} else {
  def.theme = [
    ...def.theme,
    // オンライン向けのフルカラーPDF
    "./theme-nice-techbook2/theme-online-pdf.css",
    "./theme-nice-techbook2/theme-base/css/lib/prism/base.css",
    "./theme-nice-techbook2/theme-base/css/lib/prism/theme-okaidia.css",
  ];
}

export default def;
