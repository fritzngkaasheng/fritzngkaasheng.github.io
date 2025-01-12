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
  const tempDate = new Date(
    parseInt(date.year),
    parseInt(date.month) - 1
  );
  const month = tempDate.toLocaleString('en-GB', { month: 'long' });
  return month + " " + date.year;
}

export {
	pdfOrientation,
	pdfSizeUnit,
	a4ScaledToHD720pDimensionsPx,
	pdfMarginPx,
	pdfExt,
	docxExt,
	doctypeDeclaration,
	inactiveElementClasses,
	getDateText
};
