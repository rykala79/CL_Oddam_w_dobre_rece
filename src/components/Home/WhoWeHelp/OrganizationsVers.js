import React from "react";

export default function OrganizationsVers({vers}) {
    return (
        <div className="helpPage-organization">
            <div className="organization-description">
                <h4 className="description-title">{vers.name}</h4>
                <p className="description-text">{vers.goal}</p>
            </div>
            <p className="organization-thingsTogether">{vers.items}</p>
        </div>
    )
}