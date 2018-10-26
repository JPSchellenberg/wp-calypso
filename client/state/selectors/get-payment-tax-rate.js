/** @format */

/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Internal dependencies
 */
import config from 'config';

/**
 * Returns the current user's tax rate.
 *
 * @param {Object} state - The current global state tree.
 * @return {?float} - The current combined tax rate, or null.
 */
export default function getPaymentTaxRate( state ) {
	return get( state, 'ui.payment.taxRate', config.isEnabled( 'tax11' ) ? 0.11 : null );
}
