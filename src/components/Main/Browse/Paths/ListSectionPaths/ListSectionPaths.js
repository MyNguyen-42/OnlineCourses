import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import SectionPaths from '../SectionPaths/SectionPaths';

const ListSectionPaths = () => {
  return (
    <View>
      <ScrollView>
        <SectionPaths title="Conferences" />
        <SectionPaths title="Software Development" />
        <SectionPaths title="IT Ops" />
        <SectionPaths title="Information Security" />
        <SectionPaths title="Data Professional" />
        <SectionPaths title="Business Professional" />
        <SectionPaths title="Creative Professional" />
      </ScrollView>
    </View>
  );
};

export default ListSectionPaths;

const styles = StyleSheet.create({});
