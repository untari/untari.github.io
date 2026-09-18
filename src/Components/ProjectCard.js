import React from 'react';
import { Card, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import GithubForkRibbon from './GithubForkRibbon';

function ProjectCard({ project }) {
    const websiteUrl = project.websiteUrl || project.liveUrl;

    return (
        <Card className="text-dark mt-3">
            <CardBody>
                <CardTitle className="h3">{project.title}</CardTitle>
                <CardSubtitle>{project.subtitle}</CardSubtitle>
            </CardBody>
            <GithubForkRibbon repoUrl={project.githubUrl} />
            {project.image && (
                <a href={project.liveUrl}>
                    <img src={project.image} alt={project.imageAlt} className="img-fluid" />
                </a>
            )}
            <CardBody>
                <CardText>{project.description}</CardText>
                <CardLink href={project.sourceUrl}>{project.sourceLabel}</CardLink>
                {websiteUrl && <CardLink href={websiteUrl}>{project.liveLabel}</CardLink>}
            </CardBody>
        </Card>
    );
}

export default ProjectCard;
