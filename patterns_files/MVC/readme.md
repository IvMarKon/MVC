# About MVC

### Model
###### Data of the app stores here. Model separate from view and controller. When model changes it notifies its observers(here we use Observer pattern).

### View
###### Has access to DOM. Can set event handlers. Can output data from model, like template.

### Controller
###### Buffer between model and view. Process and respond to events from Model and View.

### Observer
###### Collects methods in array. Has notify method to trigger each event from array.
