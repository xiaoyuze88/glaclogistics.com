import React, { useEffect, useRef, useState } from 'react'
import { data } from "./data";
// import './index.less';

export default () => {
	const ref = useRef(null);
	const [infoMarginLeft, setInfoMarginLeft] = useState<React.ReactText>('calc(600px - 10%)');

	useEffect(() => {
		const calcInfoMarginLeft = () => {
			const w = document.documentElement.clientWidth;

			let layoutBaseWidth = 1200;

			if (w >= 1200) {
				setInfoMarginLeft(`${layoutBaseWidth / 2 - 0.1 * w}px`);
			} else if (w >= 768 && w < 1200) {
				setInfoMarginLeft('40%');
			} else {
				setInfoMarginLeft('0');
			}
		};

		calcInfoMarginLeft();

		window.addEventListener('resize', calcInfoMarginLeft);

		return () => window.removeEventListener('resize', calcInfoMarginLeft);
	}, []);

	return (
		<div className="index-page">
			<div className="banner">
				<div className="header">
					<div className="header-inner layout-content">
						<div className="logo" />
					</div>
				</div>
				<div className="banner-body clearfix">
					<div className="banner-bg" />
					<div className="banner-cover" />
					<div className="banner-logo" />
					<div className="banner-content">
						{data.bannerContent}
					</div>
				</div>
			</div>

			<div className="services">
				<div className="layout-content">
					<div className="content-header">
						{data.service.title}
					</div>
					<div className="content-body">
						{data.service.contents.map(item => (
							<div className="content-body-item" key={item.title}>
								<div className="item-logo" style={{
									backgroundImage: `url(${item.icon})`,
								}} />
								<div className="item-title">
									{item.title}
								</div>
								<div className="item-content">
									{item.content}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="intro">
				<div className="intro-logo" />
				<div className="intro-content">
					<div className="intro-content-inner" style={{ marginLeft: infoMarginLeft }}>
						<div className="content-header">
							{data.intro.title}
						</div>
						<div className="content-body">
							{data.intro.content.map((content, index) => (
								<p key={index}>{content}</p>
							))}
							{/*深圳市冰河国际货运代理有限公司是经深圳市工商行政管理局、交通运输局联合批准成立的，具有独立法人资格的综合性运输企业，是专注国际海运、国际空运、国际速递、国际陆运、等综合性大型运输企业；同时可代办各种进出口单证文件、进出口清关操作、提供DDU/DDP清关到门服务,为出口工厂、贸易公司提供一条龙式服务。*/}

							{/*冰河国际是专业从事国际物流运输及进出口方案策划的运营商,多年来在社会各界的支持以及企业全体同仁的共同努力下，公司主营的各个项目都取得了卓越的成绩，业绩一路攀升，业务范围不断扩充,冰河国际亦拥有一支年轻、专注，训练有素，经验丰富的专业物流团队。*/}

							{/*我们立足深圳展望全球，在全球设有完善的物流网络，拥有在线客服实时跟踪和反馈货物最新动态服务团队；拥有专业、强大的清关团队助力货物高效通关；以诚为先，谋求共赢共利；以人为本，以客为尊，树企业精神，创诚信品牌。*/}
						</div>
					</div>
				</div>
			</div>

			<div className="contact">
				<div className="content-header">
					{data.contact.title}
				</div>
				<div className="content-body layout-content">
					{data.contact.content.map((group, index) => (
						<div className="content-list" key={index}>
							<div className="content-list-inner">
								{group.map((item) => {
									const content = typeof item.content === 'string' ? [item.content] : item.content;

									return (
										<div className="content-list-item" key={item.type}>
											<div className="item-logo" style={{
												backgroundImage: `url(${item.icon})`,
											}} />
											<div className="item-content">
												{content.map((content, index) => (
													<p key={index}>{content}</p>
												))}
											</div>
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="footer">
				<div className="footer-inner">
					<i className="footer-logo" />
					<span className="footer-content">
					Copyright © 2022 深圳市冰河国际货运代理有限公司 All Right Reserved
				</span>
				</div>
			</div>
		</div>
	)
}
