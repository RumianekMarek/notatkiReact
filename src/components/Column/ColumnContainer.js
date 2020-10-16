import {connect} from 'react-redux';
import Column from './Column';
import {getCardsForColumn, createActionAddCard} from '../../redux/cardRedux';


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    coulumnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);