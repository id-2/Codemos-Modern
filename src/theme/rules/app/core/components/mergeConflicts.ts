import { ThemeContext } from "../../../../../@types";

export const getRules = (themeContext: ThemeContext): object => {
  const colors = themeContext.styles;
  return {
    "editorOverviewRuler.commentForeground": colors.fill.text.ghost,
    "editorOverviewRuler.commentUnresolvedForeground":
      colors.basic.def.blue.sec,
    "editorOverviewRuler.commonContentForeground": colors.basic.neutral.qua,
    "editorOverviewRuler.currentContentForeground": colors.basic.def.mint.ter,
    "editorOverviewRuler.incomingContentForeground": colors.basic.def.blue.ter,
    "merge.border": colors.stroke.control.default,
    "merge.commonContentBackground": colors.basic.neutral.sen,
    "merge.commonHeaderBackground": colors.basic.neutral.qui,
    "merge.currentContentBackground": colors.basic.def.mint.qui,
    "merge.currentHeaderBackground": colors.basic.def.mint.ter,
    "merge.incomingContentBackground": colors.basic.def.blue.qui,
    "merge.incomingHeaderBackground": colors.basic.def.blue.ter,
    "mergeEditor.change.background": colors.basic.neutral.sep,
    "mergeEditor.change.word.background": colors.basic.neutral.sen,
    "mergeEditor.changeBase.background": colors.basic.neutral.sep,
    "mergeEditor.changeBase.word.background": colors.basic.neutral.sen,
    "mergeEditor.conflict.handled.minimapOverViewRuler":
      colors.basic.def.green.ter,
    "mergeEditor.conflict.handledFocused.border": colors.basic.def.green.pri,
    "mergeEditor.conflict.handledUnfocused.border": colors.basic.def.green.ter,
    "mergeEditor.conflict.input1.background": colors.basic.def.blue.ter,
    "mergeEditor.conflict.input2.background": colors.basic.def.mint.ter,
    "mergeEditor.conflict.unhandled.minimapOverViewRuler":
      colors.basic.def.red.ter,
    "mergeEditor.conflict.unhandledFocused.border": colors.basic.def.red.pri,
    "mergeEditor.conflict.unhandledUnfocused.border": colors.basic.def.red.ter,
    "mergeEditor.conflictingLines.background": colors.basic.def.orange.qui,
  };
};
