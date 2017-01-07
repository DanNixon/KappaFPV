import QtQuick 2.1
import QtQuick.Controls 1.1
import QtQuick.Layouts 1.0
import Shotcut.Controls 1.0

Item {
    width: 400
    height: 250
		
    Component.onCompleted: {
        if (filter.isNew) {
            filter.set('resource', filter.path + 'title_card.html')
            textField.text = qsTr('Video Title')
            filter.set('title', textField.text)
						filter.set('title_width', 500)
						setControls();
        }
        filter.set('in', filter.producerIn)
        filter.set('out', filter.producerOut)
    }
		
		function setControls() {
			titleWidthSlider.value = filter.getDouble('title_width')
		}

    GridLayout {
        columns: 2
        anchors.fill: parent
        anchors.margins: 8

        Label {
            text: qsTr('Title')
            Layout.alignment: Qt.AlignRight
        }
        TextField {
            id: textField
            Layout.columnSpan: 1
						Layout.minimumWidth: titleWidthSlider.width
            Layout.maximumWidth: titleWidthSlider.width
            text: filter.get('title')
            onTextChanged: filter.set('title', text)
        }
				
				Label {
            text: qsTr('Title width')
            Layout.alignment: Qt.AlignRight
        }
        SliderSpinner {
            id: titleWidthSlider
            Layout.columnSpan: 1
            minimumValue: 0
            maximumValue: 2500
            value: filter.getDouble('title_width')
            onValueChanged: filter.set('title_width', value)
        }
				
				Item {
            Layout.fillHeight: true
        }
    }
}
