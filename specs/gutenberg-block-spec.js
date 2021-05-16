import {
	activatePlugin,
	createNewPost,
	deactivatePlugin,
	enablePageDialogAccept,
	getEditedPostContent,
	insertBlock,
} from '@wordpress/e2e-test-utils';

jest.setTimeout( 60000 );

describe( 'Gutencat', () => {
	const plugin = 'gutencat';

	beforeAll( async () => {
		await enablePageDialogAccept();
	} );

	beforeEach( async () => {
		await activatePlugin( plugin );
		await createNewPost();
	} );

	afterEach( async () => {
		await deactivatePlugin( plugin );
	} );

	it( 'Gutencat should be available', async () => {
		await insertBlock( 'Gutencat' );

		// Check if block was inserted
		expect(
			await page.$( '[data-type="dev-fred-gutencat/gutencat"]' )
		).not.toBeNull();

		expect( await getEditedPostContent() ).toMatchSnapshot();
	} );
} );
