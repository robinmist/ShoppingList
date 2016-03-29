var React = require('react-native');
var InfiniteScrollView = require('react-native-infinite-scroll-view');
var {
  ListView,
  StyleSheet,
  TouchableHighlight,
  Text,
  Image
} = React;

var data = [
    {
        "id": 1,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 2,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 3,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 4,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 5,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 6,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 1,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 2,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 3,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 4,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 5,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    },
    {
        "id": 6,
        "profile_picture": {
            "href": "http://lorempixel.com/400/400/"
        }
    }

];

class TabList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this._data = data;
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      canLoadMoreContent: true,
      isLoadingContent: true
    };
  }

  componentDidMount(){
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(data),
    })
  }

  render() {
    return (
      <ListView
        renderScrollComponent={props => <InfiniteScrollView {...props} />}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow.bind(this)}
        style={styles.container}
        canLoadMore={this.state.canLoadMoreContent}
        isLoadingMore={this.state.isLoadingContent}
        onLoadMoreAsync={() => {}}
      />
    );
  }

  _renderRow(row) {
    return <Image
        style={{width: 400, height: 400}}
        source={{uri: row.profile_picture.href + "?" + Math.random()}}
      />
  }

}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  button: {
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
  row: {
    padding: 4,
  },
});

export default TabList;
