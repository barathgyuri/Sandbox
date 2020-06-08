page 50100 "Challenge 1 -Days without post"
{
    PageType = Card;
    ApplicationArea = All;
    UsageCategory = Administration;

    layout
    {
        area(Content)
        {
            usercontrol(DaysWihoutPost; CalcDaysWithoutPost)
            {
                ApplicationArea = All;
                trigger Ready()
                var
                    ItemLedgerEntry: Record "Item Ledger Entry";
                begin
                    /*ItemLedgerEntry.SetRange("Entry Type"::Sale);
                    if ItemLedgerEntry.FindLast() then
                        CurrPage.DaysWihoutPost.getLastSalesPost('The last sales document No. is: ' + Format(ItemLedgerEntry."Document No."));*/
                end;

                trigger ButtonCalculation()
                var
                    ItemLedgerEntry: Record "Item Ledger Entry";
                    DataFeed: JsonObject;
                    Customer: Record Customer;
                begin
                    ItemLedgerEntry.SetRange("Entry Type"::Sale);
                    if ItemLedgerEntry.FindLast() then begin
                        DataFeed.Add('DocumentNo', Format(ItemLedgerEntry."Document No."));
                        DataFeed.Add('PostingDate', Format(ItemLedgerEntry."Posting Date"));
                        DataFeed.Add('CustomerNo.', ItemLedgerEntry."Source No.");
                        Customer.Get(ItemLedgerEntry."Source No.");
                        DataFeed.Add('CustomerName', Customer.Name);
                        ItemLedgerEntry.CalcFields("Sales Amount (Actual)");
                        DataFeed.Add('Amount', ItemLedgerEntry."Sales Amount (Actual)");
                        CurrPage.DaysWihoutPost.getLastSalesPost(DataFeed);
                    end;
                end;

                trigger FoundLastPost(parameter: JsonObject)
                begin
                    Message(Format(parameter));
                end;

            }
        }
    }
    actions
    {
        area(Creation)
        {
            action(MyNiceButton)
            {
                ApplicationArea = All;
                Image = Create;
                Promoted = true;
                PromotedIsBig = true;
                trigger OnAction()
                begin
                    //CurrPage.DaysWihoutPost.getLastSalesPost('I was called from a button');
                end;
            }
        }

    }
    local procedure AddEntryToJsonObject(var MainObject: JsonObject; EntryKey: Text; EntryValue: Text)
    begin
        MainObject.Add(EntryKey, EntryValue);
    end;

}