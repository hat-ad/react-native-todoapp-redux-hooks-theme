import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, FAB, List, useTheme} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {deletenote} from '../redux/notesApp';
import {toggleTheme} from '../redux/App';
import Header from '../components/Header';

function ViewNotes({navigation}) {
  const dispatch = useDispatch();
  const {colors} = useTheme();
  const notes = useSelector((state) => state.notes);
  const app = useSelector((state) => state.app);

  const [isSwitchOn, setIsSwitchOn] = useState(app.isDark);

  const deleteNote = (id) => dispatch(deletenote(id));
  const toggleThemee = () => dispatch(toggleTheme());

  const onToggleSwitch = () => {
    setIsSwitchOn(() => !isSwitchOn);
    toggleThemee();
  };

  return (
    <>
      <Header titleText="Todo" />
      <View style={[styles.container(colors)]}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>You do not have any notes</Text>
          </View>
        ) : (
          <>
            <FlatList
              data={notes}
              renderItem={({item}) => (
                <List.Item
                  title={item.note.noteTitle}
                  description={item.note.noteValue}
                  descriptionNumberOfLines={1}
                  titleStyle={styles.listTitle}
                  onPress={() => deleteNote(item.id)}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </>
        )}

        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add new note"
          onPress={() => navigation.navigate('AddNotes')}
        />

        <FAB
          style={styles.fab2}
          small
          icon="theme-light-dark"
          onPress={() => onToggleSwitch()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: (colors) => ({
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingVertical: 20,
  }),
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
  fab2: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 80,
  },
  listTitle: {
    fontSize: 20,
  },
});

export default ViewNotes;
