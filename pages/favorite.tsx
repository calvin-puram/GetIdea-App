import styles from '@styles/Favorite.module.css';
import Layouts from '@components/Layouts';
import HomeBackButton from '@components/HomeBackButton';

import {
  Nav,
  Container,
  Row,
  Col,
  // @ts-ignore
  thead,
  // @ts-ignore
  tbody,
  // @ts-ignore
  th,
  // @ts-ignore
  tr,
  // @ts-ignore
  Table,
  // @ts-ignore
  td,
} from 'react-bootstrap';
import Link from 'next/link';
import { MdKeyboardBackspace } from 'react-icons/md';
import Image from 'next/image';

const favorite = () => {
  return (
    <Layouts title="Favorite Ideas">
      <section className={styles.favoriteWrapper}>
        <Link href="/" passHref>
          <Nav.Link className={styles.back__redirect}>
            <MdKeyboardBackspace className={styles.backButton} />{' '}
            <span>Back</span>
          </Nav.Link>
        </Link>

        <Container className={styles.favoriteSubWrapper}>
          <Row>
            <Col className={styles.favoriteIdeas}>
              <h3 className={styles.favoriteIdeasHeader}>My Favorite Ideas</h3>

              <Table responsive="sm" className={styles.table}>
                <thead className={styles.tableHead}>
                  <tr>
                    <th>Ideas Details</th>
                    <th>Category</th>
                    <th>Type</th>
                    <th>author</th>
                    <th>Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Image
                        src="/img/business/auto.jpg"
                        alt=""
                        width="100px"
                        height="66px"
                      />

                      <small className={styles.tablePara}>
                        <Link href="/ideas/become-a-photographer">
                          <a>Photography and cinematography</a>
                        </Link>
                      </small>
                    </td>
                    <td>
                      {' '}
                      <small>Creative</small>
                    </td>
                    <td>
                      <small>premium</small>
                    </td>
                    <td>
                      <small>Tom Lee</small>
                    </td>
                    <td>
                      <small>20/12/19</small>
                    </td>
                    <td>
                      <small className={styles.favoriteRemove}>remove</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        src="/img/business/boutique.jpeg"
                        alt=""
                        width="100px"
                        height="66px"
                      />

                      <small className={styles.tablePara}>
                        <Link href="/ideas/setup-a-boutique-business">
                          <a>Embark On The Journey Of Becoming An Artist</a>
                        </Link>
                      </small>
                    </td>
                    <td>
                      <small>Creative</small>
                    </td>
                    <td>
                      <small>premium</small>
                    </td>
                    <td>
                      <small>Tom Lee</small>
                    </td>
                    <td>
                      <small>20/12/19</small>
                    </td>
                    <td>
                      <small className={styles.favoriteRemove}>remove</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Image
                        src="/img/business/photography.jpg"
                        alt=""
                        width="100px"
                        height="66px"
                      />

                      <small className={styles.tablePara}>
                        <Link href="/ideas/become-an-auto-specialist">
                          <a>How To Have A Good Listening Ear For Music</a>
                        </Link>
                      </small>
                    </td>
                    <td>
                      {' '}
                      <small>Creative</small>
                    </td>
                    <td>
                      <small>premium</small>
                    </td>
                    <td>
                      <small>Tom Lee</small>
                    </td>
                    <td>
                      <small>20/12/19</small>
                    </td>
                    <td>
                      <small className={styles.favoriteRemove}>remove</small>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </section>
    </Layouts>
  );
};

export default favorite;
