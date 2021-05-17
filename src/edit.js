import {
	Placeholder,
	__experimentalNumberControl as NumberControl,
	SelectControl,
	PanelBody,
} from '@wordpress/components';
import React from 'react';
import {
	useBlockProps as blockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import catImage from './img/cat-example.jpg';
import logo from './logo';

/**
 * The block editing is different in preview or when it's a placeholder
 *
 * @param {Object} props properties of the block
 *
 * @return {WPElement} Element to render
 */
export default function Edit( props ) {
	let element = null;

	if ( props.attributes.isPreview ) {
		element = (
			<div>
				<img
					src={ `/wp-content/plugins/gutencat/build/${ catImage }` }
					alt="a black cat"
				/>
			</div>
		);
	} else {
		element = (
			<div { ...blockProps() }>
				<Placeholder icon={ logo() } label="Gutencat">
					<p>
						The image will be displayed on the live or preview of
						the page or post.
					</p>
				</Placeholder>
				<InspectorControls>
					<PanelBody title="Dimensions" initialOpen="true">
						<NumberControl
							label="Width"
							value={ Number( props.attributes.width ) }
							onChange={ ( newValue ) =>
								props.setAttributes( {
									width: newValue,
								} )
							}
						/>
						<NumberControl
							label="Height"
							value={ Number( props.attributes.height ) }
							onChange={ ( newValue ) =>
								props.setAttributes( {
									height: newValue,
								} )
							}
						/>
						<SelectControl
							label="Unit"
							value={ props.attributes.unit }
							onChange={ ( newValue ) =>
								props.setAttributes( {
									unit: newValue,
								} )
							}
							options={ [
								{ label: 'Pourcentage', value: '%%' },
								{ label: 'Pixels', value: 'px' },
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</div>
		);
	}

	return element;
}
