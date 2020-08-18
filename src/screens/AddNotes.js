import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton, TextInput, FAB, useTheme} from 'react-native-paper';
import Header from '../components/Header';
import {useDispatch, useSelector} from 'react-redux';
import {addnote} from '../redux/notesApp';

function AddNote({navigation}) {
  console.log('navigation in add: ', navigation);
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const [noteTitle, setNoteTitle] = useState('');
  const [noteValue, setNoteValue] = useState('');

  const addNote = (note) => dispatch(addnote(note));

  function onSaveNote() {
    console.log({noteTitle, noteValue});
    addNote({noteTitle, noteValue});
    navigation.goBack();
  }
  return (
    <>
      <Header titleText="Add a new note" />
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container(colors)}>
        <TextInput
          label="Add Title Here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Here"
          value={noteValue}
          onChangeText={setNoteValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == '' ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: (colors) => ({
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 20,
  }),
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});

export default AddNote;
