import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import {settings} from '../../data/dataStore';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import Container from '../Container/Container';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
    addColumn: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  
  
  render() {
    const{title, image, description, columns, addColumn} = this.props;
    return (
      <Container className={styles.component}>
        <Hero titleText={title} titleImage={image}/>
        <div className={styles.description}>
          {description}
        </div>

        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={addColumn} />
        </div>
      </Container>
    );
  }
}

export default List;
