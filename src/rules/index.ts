import actionHygiene, {
  ruleName as actionHygieneRuleName,
} from './action-hygiene'
import noDuplicateActionInReducer, {
  ruleName as noDuplicateActionInReducerRuleName,
} from './no-duplicate-action-in-reducer'
import noEffectDecoratorAndCreator, {
  ruleName as noEffectDecoratorAndCreatorRuleName,
} from './no-effect-decorator-and-creator'

const ruleNames = {
  actionHygieneRuleName,
  noDuplicateActionInReducerRuleName,
  noEffectDecoratorAndCreatorRuleName,
}

export const rules = {
  [ruleNames.actionHygieneRuleName]: actionHygiene,
  [ruleNames.noDuplicateActionInReducerRuleName]: noDuplicateActionInReducer,
  [ruleNames.noEffectDecoratorAndCreatorRuleName]: noEffectDecoratorAndCreator,
}
