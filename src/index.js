'use strict';
import { registerBlockType } from '@wordpress/blocks';
import './css/style.scss';
import {
	useBlockProps as blockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import catImage, { ReactComponent as JPG } from './img/cat-example.jpg';
import { Placeholder, Icon } from '@wordpress/components';
import { more } from '@wordpress/icons';

//? Gotta have a better way to do this with a file, but for whatever reasons, I wasn't able for an Icon component.
const logo = () => (
    <Icon
        icon={
			<svg>
				<path d="m 13.621406,7.4999997 c -0.945941,0 -5.0071868,0.092813 -7.6214058,4.0289043 V 7.4999997 C 6.0000002,5.0184383 3.9815616,2.9999999 1.5,2.9999999 c -0.82828319,0 -1.5,0.6717167 -1.5,1.4999996 0,0.8282836 0.67171681,1.5000003 1.5,1.5000003 0.8268721,0 1.5000001,0.673128 1.5000001,1.4999999 V 19.5 c 0,1.654689 1.3453103,2.999999 3.0000001,2.999999 H 14.25 c 0.414374,0 0.75,-0.335625 0.75,-0.749999 V 21 c 0,-0.828283 -0.671717,-1.5 -1.5,-1.5 H 12 L 18,15 v 6.75 c 0,0.414374 0.335625,0.749999 0.75,0.749999 h 1.5 c 0.414374,0 0.75,-0.335625 0.75,-0.749999 V 12.087187 C 20.517657,12.212347 20.02078,12.3 19.5,12.3 16.602657,12.3 14.178748,10.235155 13.621406,7.4999997 Z M 21,2.9999999 H 18 L 15,0 V 6.2999998 C 15,8.7853102 17.014689,10.8 19.5,10.8 21.98531,10.8 24,8.7853102 24,6.2999998 V 0 Z m -3.375,3.7499999 c -0.414375,0 -0.75,-0.3356256 -0.75,-0.75 0,-0.4143742 0.335625,-0.7500004 0.75,-0.7500004 0.414374,0 0.75,0.3356261 0.75,0.7500004 0,0.4143744 -0.335626,0.75 -0.75,0.75 z m 3.75,0 c -0.414375,0 -0.75,-0.3356256 -0.75,-0.75 0,-0.4143742 0.335625,-0.7500004 0.75,-0.7500004 0.414374,0 0.75,0.3356261 0.75,0.7500004 0,0.4143744 -0.335626,0.75 -0.75,0.75 z"/>
			</svg>
        }
    />
);

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType( 'dev-fred-gutencat/gutencat', {
	name: "dev-fred-gutencat/gutencat",
	icon: logo,
	example: {
		attributes: {
			isPreview: true,
		}
	},
    edit: function (props) {
		if (props.attributes.isPreview) {
			const cat = new Image().src = catImage;

			return (
				<div>
					<img src={'/wp-content/plugins/gutencat/build/' + cat} alt="a black cat image" />
				</div>
			);
		}
		else {
			return (
				<div { ...blockProps() }>
					<Placeholder icon={logo} label="Gutencat" >
						<p>The image will be displayed on the live or preview of the page or post.</p>
					</Placeholder>
				</div>
			);
		}
    },
	save() {return null }
});
