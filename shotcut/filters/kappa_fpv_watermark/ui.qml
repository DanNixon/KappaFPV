import QtQuick 2.1
import QtQuick.Controls 1.1

Item {
    width: 400
    height: 250
		
    Component.onCompleted: {
        if (filter.isNew) {
            filter.set('resource', 'plain:' + filter.path + 'watermark.html')
        }
        filter.set('in', filter.producerIn)
        filter.set('out', filter.producerOut)
    }
}
