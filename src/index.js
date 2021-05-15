import './css/style.scss';
import Edit from './edit';
import Logo from './logo';
import Save from './save';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Only define the edit since it's a dynamic block
 */
registerBlockType(
    'dev-fred-gutencat/gutencat',
    {
        "edit": Edit,
        "example": {
            "attributes": {
                "isPreview": true
            }
        },
        "icon": Logo,
        "name": "dev-fred-gutencat/gutencat",
        "save": Save
    }
);
