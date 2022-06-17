import React from 'react';
import DocumentMeta from 'react-document-meta';

function Meta () {
    const meta = {
        title: 'Digital Booking',
        description: "sitio de busqueda de alojamientos",
        meta: {
            httpEquiv: 'Content-Security-Policy',
            content:"default-src *;img-src * 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' *; style-src  'self' 'unsafe-inline'"
        }
    }

    return( 
        <DocumentMeta {...meta}>
        </DocumentMeta>
    )
}

export default Meta