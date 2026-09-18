import React from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';

function CertificateCard({ certificate }) {
    const image = (
        <img src={certificate.image} alt={certificate.imageAlt} className="img-fluid" />
    );

    return (
        <Card className="text-dark mt-3">
            <CardBody>
                <CardTitle className="h3">{certificate.title}</CardTitle>
                {certificate.subtitle && <CardSubtitle>{certificate.subtitle}</CardSubtitle>}
            </CardBody>
            {certificate.imageUrl ? <a href={certificate.imageUrl}>{image}</a> : image}
            <CardBody>
                <CardText><strong>{certificate.heading}</strong></CardText>
                {certificate.validateUrl && (
                    <CardLink href={certificate.validateUrl}>Validate Certificate</CardLink>
                )}
                <CardText>{certificate.description}</CardText>
            </CardBody>
        </Card>
    );
}

export default CertificateCard;
