
const load_ip_address = async() =>{
    const url = `https://api.ipify.org?format=json`
    const response = await fetch(url)
    const ip_data = await response.json();
    const ip = ip_data.ip
    const user_agent =  navigator.userAgent
    const browser = user_browser_detect()
    const platform = navigator.platform
    const online_value_string = navigator.onLine
    const online = online_value_string.toString()
    const cookieEnabled_value_string = navigator.cookieEnabled
    const cookieEnabled = cookieEnabled_value_string.toString()
    
    ip_address_response(3, ip, browser, platform, online, cookieEnabled, user_agent)

    set_innerText('ip', ip)
    set_innerText('browser', browser)
    set_innerText('platform', platform)
    set_innerText('online', ip)
    set_innerText('cookieEnabled', cookieEnabled)
    set_innerText('user_agent', user_agent)
}

load_ip_address();

const ip_address_response = (appointment_id, ip,browser, platform, online, cookieEnabled, user_agent) =>{
    const ip_address_url = `http://127.0.0.1:8000/core/additional/info/${appointment_id}/`
    fetch(ip_address_url, {
     
    method: "PATCH",
     
    body: JSON.stringify({
        ip_address: ip,
        browser: browser,
        operating_system: platform,
        online: online,
        cookieEnabled: cookieEnabled,
        user_agent: user_agent,
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
.then(response => response.json())
 
.then(json => console.log(json));
}


const set_innerText = (id, text) =>{
    const ip = document.getElementById(id)
    ip.innerText = text
}

const user_browser_detect = () =>{
    let userAgent = navigator.userAgent;
         let browserName;
         
         if(userAgent.match(/chrome|chromium|crios/i)){
             browserName = "chrome";
             return browserName;
           }else if(userAgent.match(/firefox|fxios/i)){
             browserName = "firefox";
             return browserName;
           }  else if(userAgent.match(/safari/i)){
             browserName = "safari";
             return browserName;
           } else if(userAgent.match(/edg/i)){
             browserName = "edge";
             return browserName;
           }else{
             browserName="No browser detection";
             return browserName;
           }
        
}