import { IndexData } from "types/index";

export const data: IndexData = {
	bannerContent: '专注国际海运、国际空运、国际速递、国际陆运等综合性大型运输，同时可代办各种进出口单证文件、进出口清关操作，提供 DDU / DDP 清关到门服务，为出口工厂、贸易公司提供一条龙式服务',
	service: {
		title: '我们的服务',
		contents: [
			{
				title: '海运服务',
				icon: require('../../assets/index/ship.svg'),
				content: '与全球主要航运公司均有合作，以确保能为客户提供有价格优势的整柜、散货拼箱服务。通过覆盖全球的100多家合作代理，可以为客户提供更个性化、多样式的国际物流解决方案。',
			},
			{
				title: '空运服务',
				icon: require('../../assets/index/plane.svg'),
				content: '长期与航空公司互利共赢的合作，使我们快速发展，成为口碑良好的空运代理人，并致力于为客户提供优势的价格及稳定的空运仓位，以及全套专业的空运快递物流服务。',
			},
			{
				title: '仓储报关',
				icon: require('../../assets/index/storage.svg'),
				content: '我们的报关行都有丰富报关和清关经验，与口岸海关保持者良好的关系。 我们可以为您提供出口报关、进口清关以及LDP服务。无论在中国还是北美，乃至全球主要港口，我们都可以为客户提供完善的仓储服务，包括内装、拆箱、贴标、分拣、打托、配送等。',
			},
		],
	},
	intro: {
		title: '公司简介',
		content: [
			'深圳市冰河国际货运代理有限公司是经深圳市工商行政管理局、交通运输局联合批准成立的，具有独立法人资格的综合性运输企业。是专注国际海运、国际空运、国际速递、国际陆运、等综合性大型运输企业；同时可代办各种进出口单证文件、进出口清关操作、提供DDU/DDP清关到门服务。为出口工厂、贸易公司提供一条龙式服务。',
			'冰河国际是专业从事国际物流运输及进出口方案策划的运营商，多年来在社会各界的支持以及企业全体同仁的共同努力下，公司主营的各个项目都取得了卓越的成绩，业绩一路攀升，业务范围不断扩充。冰河国际亦拥有一支年轻、专注，训练有素，经验丰富的专业物流团队。',
			'我们立足深圳展望全球，在全球设有完善的物流网络。拥有在线客服实时跟踪和反馈货物最新动态服务团队；拥有专业、强大的清关团队助力货物高效通关。',
			'以诚为先，谋求共赢共利；以人为本，以客为尊，树企业精神，创诚信品牌。',
		],
	},
	contact: {
		title: '联系我们',
		content: [
			[
				{
					type: 'address',
					icon: require('../../assets/index/home.svg'),
					content: [
						'深圳市冰河国际货运代理有限公司',
						'深圳市宝安区航城街道航空路36号',
						'华盛泰科技大厦D栋507',
					],
				},
				{
					type: 'phone',
					icon: require('../../assets/index/phone.svg'),
					content: '15989362272',
				},
			],
			[
				{
					type: 'tel',
					icon: require('../../assets/index/tel.svg'),
					content: '0755-27202545',
				},
				{
					type: 'qq',
					icon: require('../../assets/index/qq.svg'),
					content: '285447894',
				},
				{
					type: 'email',
					icon: require('../../assets/index/mail.svg'),
					content: 'OP1@glaclogistics.com',
				},
			]
		],
	},
};
