import { Placeholder } from '@wordpress/components';
import React from 'react';
import { useBlockProps as blockProps } from '@wordpress/block-editor';
import catImage from './img/cat-example.jpg';
import logo from './logo';

/**
 * The block editing is different in preview or when it's a placeholder
 *
 * @param {Object} props test
 *
 * @return {WPElement} Element to render
 */
export default function Edit(props) {
    let element = null;

    if (props.attributes.isPreview) {
        element = (
            <div>
                <img src={`/wp-content/plugins/gutencat/build/${catImage}`}
                    alt="a black cat" />
            </div>
        );
    }
    else {
        element = (
            <div { ...blockProps() }>
                <Placeholder icon={logo()} label="Gutencat" >
                    <p>The image will be displayed on the live or preview of
                         the page or post.</p>
                </Placeholder>
            </div>
        );
    }

    return element;
}
