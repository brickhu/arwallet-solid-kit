import { comparePermissions } from "./permissions";


export const STRATEGY_STORE = "wallet_kit_strategy_id";

/**
 * On page mount, sync the logged in strategy
 *
 * @param strategies - List of strategies used by the library
 * @param requiredPermissions - The permissions required by this app
 * @param  enforcePermissions - Should the strategy be active only if the required permissions are given
 * @returns
 */
export async function syncStrategies(strategies, requiredPermissions, enforcePermissions) {
  const activeStrategy = localStorage?.getItem(STRATEGY_STORE) || false;

  if (activeStrategy) {
    const strategy = getStrategy(activeStrategy, strategies);
    if (strategy) return strategy;
  }

  for (const strategy of strategies) {
    const permissions = await strategy.getPermissions();

    if (
      (!enforcePermissions && permissions.length > 0) ||
      (enforcePermissions && comparePermissions(requiredPermissions, permissions))
    ) {
      saveStrategy(strategy.id);
      return getStrategy(strategy.id, strategies);
    }
  }

  return false;
}

/**
 * Save active strategy to localStorage
 *
 * @param {string} active - The ID of the active strategy
 */
export function saveStrategy(active) {
  if (localStorage) {
    localStorage.setItem(STRATEGY_STORE, active);
  }
}

/**
 * Remove active strategy to localStorage
 *
 * @param {string} active - The ID of the active strategy
 */
export function removeStrategy() {
  if (localStorage) {
    localStorage.removeItem(STRATEGY_STORE);
  }
}

/**
 * Get strategy by ID
 *
 * @param  id - The ID of the strategy
 * @param  strategies - List of strategies
 * @returns 
 */
export function getStrategy(id, strategies) {
  return strategies.find((s) => s.id === id);
}
