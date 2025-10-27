import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchGroup: {
    backgroundColor: "#34967C",
    height: 100,
    alignContent: "center",
  },
  searchFormGroup: {
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 25,
    paddingRight: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "white",
  },
  searchFormText: {
    color: "black",
  },
  searchButton: {
    borderRadius: "50%",
    padding: 5,
    backgroundColor: "orange",
  },
  listingContainer: {
    paddingHorizontal: 10,
  },
  filterGroup: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  paginationContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  showMoreButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    backgroundColor: "#000",
  },
  showMoreButtonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
});

export { styles };
