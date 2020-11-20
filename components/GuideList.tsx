import { GuidePreview } from '../interfaces';
import Link from 'next/link';
import styles from './GuideList.module.scss';
import { Col, Row } from 'react-bootstrap';

type Props = {
  guides: GuidePreview[];
};

const GuideList = ({ guides }: Props): JSX.Element => (
  <Col xs={12} className={styles['guide-list']}>
    {guides.map((guide: GuidePreview, i: number) => (
      <Link href={`${guide.path}/${guide.entry.replace('.md', '')}`} key={i}>
        <Row className={`${styles['guide-entry']} p-2 mb-2 rounded`}>
          <Col xs="auto" className="px-0">
            <img className={styles.icon} src={guide.icon} alt="Guide icon"></img>
          </Col>
          <Col>
            <h4 className="color-yellow mb-1">{guide.title}</h4>
            <p className="mb-0">{guide.description}</p>
          </Col>
        </Row>
      </Link>
    ))}
  </Col>
);

export default GuideList;
