import React, { useEffect } from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Image, Linking } from 'react-native'
import { Text } from 'react-native-paper'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem } from '../redux/action/ProductActions'
import { Colors } from '../module/Color';
import { width, height } from '../module/Scale';


function Details({ }) {
  const cartItemsArray = useSelector(state => state)
  const dispatch = useDispatch()
  const deleteItemFromCart = id => dispatch(deleteItem(id))


  function getTotal() {

    let total = 0;
    if (cartItemsArray != undefined && cartItemsArray.length !== 0) {


      for (let i = 0; i < cartItemsArray.length; i++) {
        total = total + parseInt(cartItemsArray[i].item.price);
      }
    }
    return total
  }




  return (
    <>
      <View style={styles.container}>
        {cartItemsArray.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Your cart is empty</Text>
          </View>
        ) : (
            <FlatList
              // key={2}
              data={cartItemsArray}
              renderItem={({ item }) => (
                <View style={styles.cardView}>
                  <View style={styles.cartItemMetaContainer}>

                    <View style={styles.cartItemMetaContainerBox}>
                      <Image source={{ uri: item.item.imgUrl }} style={styles.thumbnail} />

                      <View style={styles.cartItemMetaContainerBoxItems}>

                        <Text style={styles.textTitle} numberOfLines={1}> {item.item.productname}  </Text>

                        <Text style={styles.textvendorname}>{item.item.vendorname}</Text>
                        <Text style={styles.txtVendoraddress}> {item.item.vendoraddress}</Text>
                      </View>
                      <Text style={styles.textPrice}> Price {'\n'} {item.item.price}</Text>

                    </View>
                    <View style={styles.buttonContainer}>
                      <TouchableOpacity
                        onPress={() => Linking.openURL(`tel:${item.item.phoneNumber}`)
                        }

                        style={styles.button}>
                        <Text style={styles.buttonText}>Call Vendor</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => deleteItemFromCart(item.id)}
                        style={styles.buttonRemove}>
                        <Text style={styles.buttonText}>Remove from cart</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />

          )}
        {
          getTotal() > 0 &&

          <View
            style={styles.footerTotal}>
            <Text style={styles.footerTotalText}>Total: {getTotal()}</Text>

          </View>
        }
      </View>
    </>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,

  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 20
  }
  ,
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 20
  },

  thumbnail: {
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    width: 150,
    height: 100,

  },
  cartItemMetaContainer: {
    padding: 5,
  },
  cartItemMetaContainerBox: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: 5,
  },

  cartItemMetaContainerBoxItems: {
    flexDirection: 'column',
    left:10
  },
  textTitle: {
    fontSize: 22,

    top: 10
  },
  textvendorname: {
    fontSize: 18,
    marginTop: 10,
    left: 5

  },
  txtVendoraddress: {
    fontSize: 18,
  }, 
  textPrice: {
    fontSize: 14,
    marginTop: 20,
    left: 40
  }
  ,
  buttonContainer: {
paddingBottom:10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 5,
    marginTop: 10
  },
  button: {
    borderRadius: 5,
    backgroundColor: Colors.backGroundColor,
    padding: 5
  },

  buttonRemove: {
    right:10,
    borderRadius: 5,
    backgroundColor: Colors.backGroundColor,
    padding: 5
  },
  footerTotal: {
    alignSelf: 'stretch',
    borderRadius: 8,
    backgroundColor: Colors.backGroundColor,
    padding: 5
  },
  footerTotalText: {
    padding: 5,
    fontSize: 20,
    color: Colors.buttontextColor,
    textAlign: 'center',
  },
  buttonText: {
    padding: 5,
    fontSize: 18,
    color: Colors.buttontextColor,
    textAlign: 'center',

  },
  cardView: {
    borderColor: 'transparent',
    margin: 10,
    borderBottomWidth: 0,
    shadowColor: Colors.cardShadow,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
    backgroundColor: Colors.buttontextColor,
    width: width * 0.95,
    // height:height*0.20,
    borderRadius: 15,
  },
})
export default Details