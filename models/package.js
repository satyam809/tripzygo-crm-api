const mongoose = require('mongoose');
const { Schema } = mongoose;

const packageSchema = new Schema({
    queryId: {
        type: Schema.Types.ObjectId,
        ref: 'Query' // Reference to the Query model
    },
    "name": String,
    "notes": String,
    "confirmQuote": Number,
    "confirmDate": Date,
    "confirmedBy": String,
    "archiveThis": Number,
    "packageThemeId": String,
    "coverPhoto": String,
    "packageType": String,
    "startDate": Date,
    "endDate": Date,
    "price": Number,
    "price4": Number,
    "price5": Number,
    "gst": Number,
    "totalgst": Number,
    "totaligst": Number,
    "totalsgst": Number,
    "totalcgst": Number,
    "igst": Number,
    "sgst": Number,
    "cgst": Number,
    "invoiceDate": Date,
    "grossPrice": Number,
    "withoutHotelGross": Number,
    "withoutHotelNet": Number,
    "optionOneHotel": String,
    "optionTwoHotel": String,
    "optionThreeHotel": String,
    "grossMargin": Number,
    "grossNoGSTPrice": Number,
    "grosstcs": Number,
    "grossGst": Number,
    "netPrice": Number,
    "currencyId": String,
    "destinations": String,
    "keywords": String,
    "relate_key": String,
    "personType": String,
    "days": Number,
    "adult": Number,
    "child": Number,
    "packageInclusion": String,
    "packageExclusion": String,
    "terms": String,
    "status": Number,
    "addedBy": String,
    "dateAdded": Date,
    "invoiceStatus": String,
    "fromValidity": Date,
    "toValidity": Date,
    "showwebsite": Number,
    "packageDetails": String,
    "extratabtitle": String,
    "extratabdetails": String,
    "packageTopTagline": String,
    "packageFooterTagline": String,
    "packageTaglineColor": String,
    "emi": String,
    "packageId": String,
    "bookingDays": Number,
    "maldivesPackage": Number,
    "hotelId": String,
    "billingType": String,
    "depositAmount": Number,
    "depositDueDate": Date,
    "packageTheme": String,
    "inclusionExclusion": String,
    "extraMarkup": String,
    "linkSharing": Number,
    "showcgst": Number,
    "showsgst": Number,
    "showigst": Number,
    "showtcs": Number,
    "tcsPercent": Number,
    "totalDiscount": Number,
    "baseMarkup": String,
    "ebo": Number,
    "websiteCost": Number,
    "websiteValidity": Date,
    "showinPopular": Number,
    "showinSpecial": Number,
    "aboutPackage": String,
    "description": String,
    "location": String,
    "hotel": String,
    "destination_type": String,
    "destination_search": String,
    "tour_type": String,
    "activity_type": String,
    "landscape_type": String,
    "publicly_visible": Number,
    "website_visible": Number,
    "sliderPhoto1": String,
    "imgAlt1": String,
    "sliderPhoto2": String,
    "imgAlt2": String,
    "sliderPhoto3": String,
    "imgAlt3": String,
    "sliderPhoto4": String,
    "imgAlt4": String,
    "sliderPhoto5": String,
    "imgAlt5": String,
    "sliderPhoto6": String,
    "imgAlt6": String,
    "mapURL": String,
    "web_pack_price": Number,
    "slug": String,
    "package_rating": Number,
    "hotel_facility": String
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
