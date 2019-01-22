import { connect } from "tls";
import List from "../page/list";

function mapStateToProps(state) {
    return {
        cardsList: state.cards.cardsList,
        cardsLoading: state.loading.effects['cards/queryList'],
    };
}

export default connect(mapStateToProps)(List);