import Vue from 'vue'
import SxNotify from '@/components/smilex/SxNotify'

/**
 * @param {
 *  title 标题,
 *  content 内容,
 *  type 类型, info，success,warning,error
 * }
 */
function notifyAlert(options, timeout = 3000) {
    let NotifyCompont = Vue.extend(SxNotify);
    let instance = new NotifyCompont().$mount();
    Object.assign(instance, options)
    document.body.appendChild(instance.$el);
    // setTimeout(() => {
    //     instance.$el.remove();
    // }, timeout)
}

Vue.prototype.$alert = notifyAlert; 