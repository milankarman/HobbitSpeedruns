import styles from './ResourceList.module.scss';
import { Col, Row } from 'react-bootstrap';
import { Resource } from '../interfaces/resources';

type Props = {
  resources: Resource[];
};

const ResourceList = ({ resources: resources }: Props): JSX.Element => (
  <Col xs={12} className={`${styles['resource-list']} px-2`}>
    {resources.map((resource: Resource, i: number) => (
      <a href={resource.url} key={i} target="_blank" rel="noreferrer">
        <Row className={`${styles['resource-entry']} py-2 mb-2 rounded`}>
          <Col>
            <h4 className="color-yellow mb-1">{resource.name}</h4>
            <p className="mb-0">{resource.description}</p>
          </Col>
        </Row>
      </a>
    ))}
  </Col>
);

export default ResourceList;
