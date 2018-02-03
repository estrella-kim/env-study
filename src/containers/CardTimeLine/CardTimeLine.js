import React from 'react';
import {connect} from 'react-redux';
import './CardTimeLine.css';
import {Rate} from 'antd';
import { ActivityIndicator, Card, Flex, WhiteSpace } from 'antd-mobile';
import { fetchProductList } from '../../actions/products';

class CardTimeLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: {
        data: []
      }
    }
  }
  componentDidMount() {
    this.props.fetchProductList();
  }
  render() {
    if (this.props.loading) {
      return (
        <ActivityIndicator
          toast
          text="Loading..."
          animating={this.props.loading}
        />
      );
    }

    return (
      <div>
        {this.props.products.map((v, i) => {
          return (
            <div key={i}>
              <Flex>
                <Flex.Item>
                  <Card full>
                    <Card.Header
                      title={v.name}
                      thumb={v.image}
                      extra={<span>{v.address1} / {v.address2}</span>}
                    />
                    <Card.Body>
                      <div>{v.description}</div>
                    </Card.Body>
                    <Card.Footer content={v.category} extra={<div><Rate allowHalf defaultValue={v.grade} /></div>} />
                  </Card>
                </Flex.Item>
              </Flex>
              <WhiteSpace size="lg" />
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  sidebar: state.sidebar,
  count: state.count,
  loading: state.timeLine.loading,
  products: state.timeLine.products
});
const mapDispatchToProps = {
  fetchProductList
};
export default connect(mapStateToProps, mapDispatchToProps)(CardTimeLine);