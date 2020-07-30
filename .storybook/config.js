import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import { withKnobs } from '@storybook/addon-knobs';
import theme from './theme';

addParameters({
  options: {
    theme
  },
});
addDecorator(withKnobs)
addDecorator(withInfo);
addDecorator(withNotes);

function loadStories() {
  require('../stories/alertDialog.stories');
  require('../stories/backAppbar.stories');
  require('../stories/bottomNavigationMenu.stories');
  require('../stories/breadcrumbs.stories');
  require('../stories/confirmDialog.stories');
  require('../stories/button.stories');
  require('../stories/buttonMenu.stories');
  require('../stories/center.stories');
  require('../stories/checkbox.stories');
  require('../stories/checkboxInput.stories');
  require('../stories/checkboxInputGroup.stories');
  require('../stories/ckeditor.stories');
  require('../stories/dataList.stories');
  require('../stories/dateRangePicker.stories');
  require('../stories/divider.stories');
  require('../stories/editableField.stories');
  require('../stories/fixedCenter.stories');
  require('../stories/formControlEditor.stories');
  require('../stories/iconButtonMenu.stories');
  require('../stories/icons.stories');
  require('../stories/schemaFields.stories');
  require('../stories/intlControlProvider.stories');
  require('../stories/markdownElement.stories');
  require('../stories/mediaStreamClipper.stories');
  require('../stories/navbarBrick.stories');
  require('../stories/nestedListItem.stories');
  require('../stories/nestedSideMenu.stories');
  require('../stories/picker.stories');
  require('../stories/reactSelect.stories');
  require('../stories/radio.stories');
  require('../stories/radioGroup.stories');
  require('../stories/radioInput.stories');
  require('../stories/radioInputGroup.stories');
  require('../stories/ratioImage.stories');
  require('../stories/searchDataList.stories');
  require('../stories/sideMenu.stories');
  require('../stories/simpleAddress.stories');
  require('../stories/snackbar.stories');
  require('../stories/surveyCharts.stories');
  require('../stories/switchLabelField.stories');
  require('../stories/textLoading.stories');
  require('../stories/youtubePlayer.stories');
  // You can require as many stories as you need.
}

configure(loadStories, module);
