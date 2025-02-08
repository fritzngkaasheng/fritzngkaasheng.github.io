"use strict";

const pdfOrientation = "portrait";
const pdfSizeUnit = "px";
// const a4Size72DPIPx = [width, height];
const a4Size72DPIPx = [595, 842];
// const a4Size300DPIPx = [width, height];
const a4Size300DPIPx = [2480, 3508];
// const a4ScaledToHDDimensionsPx = [width, height];
const a4ScaledToHD720pDimensionsPx = [1280, (1280 / a4Size300DPIPx[0] * a4Size300DPIPx[1])];
const pdfMarginPx = 96;

const pdfExt = ".pdf";
const docxExt = ".docx";
const doctypeDeclaration = "<!DOCTYPE html>";

const inactiveElementClasses = "bg-black bg-opacity-25 opacity-50";

const getDateText = date => {
	if (date.month) {
		const tempDate = new Date(
			parseInt(date.year),
			parseInt(date.month) - 1
		);
		const month = tempDate.toLocaleString('en-GB', { month: 'long' });
		return month + " " + date.year;
	}

	if (!date.month) {
		return date.year;
	}
}

const sortByStartDateDesc = (a, b) => {
	const dateA = a.date ? new Date(
		parseInt(a.date.start.year ? a.date.start.year : 0),
		parseInt(a.date.start.month ? a.date.start.month : 1) - 1
	) : new Date(0, 0);
	const dateB = b.date ? new Date(
		parseInt(b.date.start.year ? b.date.start.year : 0),
		parseInt(b.date.start.month ? b.date.start.month : 1) - 1
	) : new Date(0, 0);

	return dateB - dateA;
}

const sortByEndDateDesc = (a, b) => {
	const dateA = a.date ? new Date(
		parseInt(a.date.end.year ? a.date.end.year : 0),
		parseInt(a.date.end.month ? a.date.end.month : 1) - 1
	) : new Date(0, 0);
	const dateB = b.date ? new Date(
		parseInt(b.date.end.year ? b.date.end.year : 0),
		parseInt(b.date.end.month ? b.date.end.month : 1) - 1
	) : new Date(0, 0);

	return dateB - dateA;
}

const sortExperience = sortByStartDateDesc;

const sortEducation = sortByEndDateDesc;

export {
	pdfOrientation,
	pdfSizeUnit,
	a4ScaledToHD720pDimensionsPx,
	pdfMarginPx,
	pdfExt,
	docxExt,
	doctypeDeclaration,
	inactiveElementClasses,
	getDateText,
	sortExperience,
	sortEducation
};
