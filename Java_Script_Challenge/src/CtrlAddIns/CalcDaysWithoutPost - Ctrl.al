controladdin CalcDaysWithoutPost
{
    RequestedHeight = 300;
    MinimumHeight = 300;
    MaximumHeight = 300;
    RequestedWidth = 700;
    MinimumWidth = 700;
    MaximumWidth = 700;
    VerticalStretch = true;
    VerticalShrink = true;
    HorizontalStretch = true;
    HorizontalShrink = true;
    StyleSheets = 'src\JavaScript\CSS\DaysWithoutPost.css';
    Scripts = 'src\JavaScript\Scripts\DaysWithoutPostFunc.js';
    StartupScript = 'src\JavaScript\Scripts\DaysWithoutPostStart.js';
    //Images = '';

    event Ready();
    event FoundLastPost(ObjectData: JsonObject);
    event ButtonCalculation();

    procedure getLastSalesPost(CalculatedData: JsonObject);
}