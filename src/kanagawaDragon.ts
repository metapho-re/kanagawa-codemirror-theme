import { HighlightStyle, syntaxHighlighting } from "@codemirror/language";
import { Extension } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { tags } from "@lezer/highlight";

const dragonWhite = "#C5C9C5";
const oldWhite = "#C8C093";
const dragonBlack0 = "#0D0C0C";
const dragonBlack1 = "#12120F";
const dragonBlack2 = "#1D1C19";
const dragonBlack3 = "#181616";
const dragonBlack4 = "#282727";
const dragonBlack5 = "#393836";
const dragonBlack6 = "#625E5A";
const waveBlue1 = "#223249";
const waveBlue2 = "#2D4F67";
const dragonGreen1 = "#87A987";
const dragonGreen2 = "#8A9A7B";
const dragonOrange1 = "#B6927B";
const dragonOrange2 = "#B98D7B";
const dragonGray1 = "#A6A69C";
const dragonGray2 = "#9E9B93";
const dragonGray3 = "#7A8382";
const dragonBlue1 = "#658594";
const dragonBlue2 = "#8bA4B0";
const dragonPink = "#A292A3";
const dragonViolet = "#8992A7";
const dragonRed = "#C4746E";
const dragonAqua = "#8EA4A2";
const dragonAsh = "#737C73";
const dragonTeal = "#949FB5";
const dragonYellow = "#C4B28A";
const waveAqua = "#6A9589";
const springGreen = "#98BB6C";
const katanaGray = "#717C7C";
const winterGreen = "#2B3328";
const winterYellow = "#49443C";
const winterRed = "#43242B";
const winterBlue = "#252535";
const autumnGreen = "#76946A";
const autumnYellow = "#DCA561";
const autumnRed = "#C34043";
const samuraiRed = "#E82424";
const roninYellow = "#FF9E3B";

export const dragonColors = {
  dragonWhite,
  oldWhite,
  dragonBlack0,
  dragonBlack1,
  dragonBlack2,
  dragonBlack3,
  dragonBlack4,
  dragonBlack5,
  dragonBlack6,
  waveBlue1,
  waveBlue2,
  dragonGreen1,
  dragonGreen2,
  dragonOrange1,
  dragonOrange2,
  dragonGray1,
  dragonGray2,
  dragonGray3,
  dragonBlue1,
  dragonBlue2,
  dragonPink,
  dragonViolet,
  dragonRed,
  dragonAqua,
  dragonAsh,
  dragonTeal,
  dragonYellow,
  waveAqua,
  springGreen,
  katanaGray,
  winterGreen,
  winterYellow,
  winterRed,
  winterBlue,
  autumnGreen,
  autumnYellow,
  autumnRed,
  samuraiRed,
  roninYellow,
};

export const kanagawaDragonTheme = EditorView.theme(
  {
    "&": {
      backgroundColor: dragonBlack3,
      color: dragonWhite,
    },
    ".cm-content": {
      caretColor: dragonWhite,
    },
    ".cm-cursor, .cm-dropCursor": {
      borderLeftColor: dragonWhite,
    },
    "&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection":
      {
        backgroundColor: waveBlue1,
      },
    ".cm-panels": {
      backgroundColor: dragonBlack0,
      color: dragonWhite,
    },
    ".cm-panels.cm-panels-top": {
      borderBottom: `2px solid ${dragonBlack0}`,
    },
    ".cm-panels.cm-panels-bottom": {
      borderTop: `2px solid ${dragonBlack0}`,
    },
    ".cm-searchMatch": {
      backgroundColor: waveBlue2,
    },
    ".cm-searchMatch.cm-searchMatch-selected": {
      backgroundColor: waveBlue2,
      outline: `1px solid ${roninYellow}`,
    },
    ".cm-activeLine": { backgroundColor: dragonBlack5 },
    ".cm-selectionMatch": { backgroundColor: dragonBlack5 },
    "&.cm-focused .cm-matchingBracket, &.cm-focused .cm-nonmatchingBracket": {
      backgroundColor: dragonBlack0,
      outline: `1px solid ${dragonBlack6}`,
    },
    ".cm-gutters": {
      backgroundColor: dragonBlack3,
      color: dragonBlack6,
      border: "none",
    },
    ".cm-activeLineGutter": {
      color: dragonOrange1,
      backgroundColor: dragonBlack3,
    },
    ".cm-foldPlaceholder": {
      backgroundColor: dragonBlack4,
      color: dragonViolet,
      border: "none",
    },
    ".cm-tooltip": {
      backgroundColor: waveBlue1,
      border: "none",
    },
    ".cm-tooltip .cm-tooltip-arrow:before": {
      borderTopColor: "transparent",
      borderBottomColor: "transparent",
    },
    ".cm-tooltip .cm-tooltip-arrow:after": {
      borderTopColor: waveBlue1,
      borderBottomColor: waveBlue1,
    },
    ".cm-tooltip-autocomplete": {
      "& > ul > li[aria-selected]": {
        backgroundColor: dragonBlack5,
        color: dragonWhite,
      },
    },
  },
  { dark: true }
);

export const kanagawaDragonHighlightStyle = HighlightStyle.define([
  { tag: tags.comment, color: dragonAsh },
  { tag: tags.lineComment, color: dragonAsh },
  { tag: tags.blockComment, color: dragonAsh },
  { tag: tags.docComment, color: dragonAsh },
  { tag: tags.name, color: dragonWhite },
  { tag: tags.variableName, color: dragonWhite },
  { tag: tags.typeName, color: dragonAqua },
  { tag: tags.tagName, color: dragonViolet },
  { tag: tags.propertyName, color: dragonYellow },
  { tag: tags.attributeName, color: dragonYellow },
  { tag: tags.className, color: dragonAqua },
  { tag: tags.labelName, color: dragonBlue2 },
  { tag: tags.namespace, color: dragonYellow },
  { tag: tags.macroName, color: dragonRed },
  { tag: tags.literal, color: dragonGreen2 },
  { tag: tags.string, color: dragonGreen2 },
  { tag: tags.docString, color: dragonGreen2 },
  { tag: tags.character, color: dragonOrange1 },
  { tag: tags.attributeValue, color: dragonGreen2 },
  { tag: tags.number, color: dragonPink },
  { tag: tags.integer, color: dragonPink },
  { tag: tags.float, color: dragonPink },
  { tag: tags.bool, color: dragonOrange1 },
  { tag: tags.regexp, color: dragonRed },
  { tag: tags.escape, color: dragonTeal },
  { tag: tags.color, color: dragonOrange1 },
  { tag: tags.url, color: dragonGreen2, textDecoration: "underline" },
  { tag: tags.keyword, color: dragonViolet },
  { tag: tags.self, color: dragonViolet },
  { tag: tags.null, color: dragonViolet },
  { tag: tags.atom, color: dragonViolet },
  { tag: tags.unit, color: dragonYellow },
  { tag: tags.modifier, color: dragonViolet },
  { tag: tags.operatorKeyword, color: dragonYellow },
  { tag: tags.controlKeyword, color: dragonViolet, fontWeight: "bold" },
  { tag: tags.definitionKeyword, color: dragonViolet },
  { tag: tags.moduleKeyword, color: dragonViolet },
  { tag: tags.operator, color: dragonYellow },
  { tag: tags.derefOperator, color: dragonYellow },
  { tag: tags.arithmeticOperator, color: dragonYellow },
  { tag: tags.logicOperator, color: dragonYellow },
  { tag: tags.bitwiseOperator, color: dragonYellow },
  { tag: tags.compareOperator, color: dragonYellow },
  { tag: tags.updateOperator, color: dragonYellow },
  { tag: tags.definitionOperator, color: dragonYellow },
  { tag: tags.typeOperator, color: dragonYellow },
  { tag: tags.controlOperator, color: dragonYellow },
  { tag: tags.punctuation, color: dragonGray2 },
  { tag: tags.separator, color: dragonGray2 },
  { tag: tags.bracket, color: dragonGray2 },
  { tag: tags.angleBracket, color: dragonGray2 },
  { tag: tags.squareBracket, color: dragonGray2 },
  { tag: tags.paren, color: dragonGray2 },
  { tag: tags.brace, color: dragonGray2 },
  { tag: tags.content, color: dragonWhite },
  { tag: tags.heading, color: dragonGreen2, fontWeight: "bold" },
  { tag: tags.heading1, color: dragonGreen2, fontWeight: "bold" },
  { tag: tags.heading2, color: dragonGreen2, fontWeight: "bold" },
  { tag: tags.heading3, color: dragonGreen2, fontWeight: "bold" },
  { tag: tags.heading4, color: dragonGreen2, fontWeight: "bold" },
  { tag: tags.heading5, color: dragonGreen2, fontWeight: "bold" },
  { tag: tags.heading6, color: dragonGreen2, fontWeight: "bold" },
  { tag: tags.contentSeparator, color: dragonGray2 },
  { tag: tags.list, color: dragonWhite },
  { tag: tags.quote, color: dragonRed, fontStyle: "italic" },
  { tag: tags.emphasis, fontStyle: "italic" },
  { tag: tags.strong, fontWeight: "bold" },
  { tag: tags.link, color: dragonGreen2, textDecoration: "underline" },
  { tag: tags.strikethrough, textDecoration: "line-through" },
  { tag: tags.inserted, color: autumnGreen },
  { tag: tags.deleted, color: autumnRed },
  { tag: tags.changed, color: autumnYellow },
  { tag: tags.invalid, color: samuraiRed },
  { tag: tags.meta, color: dragonViolet },
  { tag: tags.documentMeta, color: dragonViolet },
  { tag: tags.annotation, color: dragonGray2 },
  { tag: tags.processingInstruction, color: dragonViolet },
  { tag: tags.definition(tags.name), color: dragonYellow },
  { tag: tags.constant(tags.name), color: dragonOrange1 },
  { tag: tags.function(tags.variableName), color: dragonBlue2 },
  { tag: tags.standard(tags.name), color: dragonWhite },
  { tag: tags.local(tags.name), color: dragonWhite },
  { tag: tags.special(tags.string), color: dragonRed },
  { tag: tags.special(tags.variableName), color: dragonRed },
]);

export const kanagawaDragon: Extension = [
  kanagawaDragonTheme,
  syntaxHighlighting(kanagawaDragonHighlightStyle),
];
