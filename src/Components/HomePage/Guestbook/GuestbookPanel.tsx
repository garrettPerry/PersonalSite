import './GuestbookPanelStyle.css';

function GuestbookPanel() {
return(
    <div className="panel panel-guestbook" style={{ gridArea: 'guestbook'}}>
        <div className="panel-header">
            <span>Guestbook</span>
        </div>
        <div className="panel-body">
            <p>Guestbook</p>
        </div>
    </div>


)
}

export default GuestbookPanel