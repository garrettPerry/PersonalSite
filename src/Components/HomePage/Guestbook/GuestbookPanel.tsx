import './GuestbookPanelStyle.css';

function GuestbookPanel() {
return(
    <div className="panel panel-guestbook" style={{ gridArea: 'guestbook'}}>
        <div className="panel-header">
            <span>Guestbook</span>
        </div>
        <div className="panel-body">
            <iframe 
                src="https://www3.cbox.ws/box/?boxid=3562227&boxtag=6Nm9XS" 
                width="100%" 
                height="450" 
                allowTransparency={true} 
                allow="autoplay" 
                frameBorder={0} 
                marginHeight={0} 
                marginWidth={0} 
                scrolling="auto">
            </iframe>	
        </div>
    </div>


)
}

export default GuestbookPanel