import React from 'react';
import './CardTimeLine.css';
import { ActivityIndicator, Card, Flex, WhiteSpace } from 'antd-mobile';
import { Rate } from 'antd';
import { connect } from 'react-redux';
import { fetchList } from '../../actions/product';

class CardTimeLine extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    if(this.props.loading) {
      return <div className="toast-example">
        <ActivityIndicator
          toast
          text="Loading..."
          animating={this.props.loading}
        />
      </div>
    }
    return (
      <div>
        {
          this.props.list.map((v, i) => {
            return (
              <div key={i}>
                <Flex>
                  <Flex.Item>
                    <Card full>
                      <Card.Header
                        title={v.name}
                        thumb={v.image}
                        extra={<span>{v.address1}/{v.address2}</span>}
                      />
                      <Card.Body>
                        <div>{v.description}</div>
                      </Card.Body>
                      <Card.Footer content={v.category} extra={<div>{<Rate allowHalf defaultValue={v.grade} />}</div>} />
                    </Card>
                  </Flex.Item>
                </Flex>
                <WhiteSpace size="lg" />
              </div>
            );
          })
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.productList.list,
    loading: state.productList.loading
  };
};
const mapDispatchToProps = {
  fetchList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardTimeLine);











