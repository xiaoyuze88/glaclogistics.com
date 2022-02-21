export interface IndexData {
	bannerContent: string;
	service: {
		title: string;
		contents: {
			icon: string;
			title: string;
			content: string;
		}[];
	};
	intro: {
		title: string;
		content: string[];
	};
	contact: {
		title: string;
		content: {
			type: string;
			icon: string;
			content: string | string[];
		}[][];
	};
}