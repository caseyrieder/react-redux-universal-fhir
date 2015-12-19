'use strict';

export default function loadConformance() {

  return new Promise((resolve) => {

    resolve({
      "resourceType": "Conformance",
      "id": "example",
      "text": {
        "status": "generated",
        "div": "<div>\n      \n      <p>The EHR Server supports the following transactions for the resource Person: read, vread, \n        update, history, search(name,gender), create and updates.</p>\n      \n      <p>The EHR System supports the following message: admin-notify::Person.</p>\n      \n      <p>The EHR Application has a \n        <a href=\"http://fhir.hl7.org/base/Profilebc054d23-75e1-4dc6-aca5-838b6b1ac81d/_history/b5fdd9fc-b021-4ea1-911a-721a60663796\">general document profile</a>.\n      </p>\n    \n    </div>"
      },
      "url": "68D043B5-9ECF-4559-A57A-396E0D452311",
      "_url": {
        "fhir_comments": [
          "    the identifier for this conformance statement. \n    The identifier and version establish identifiers that other specifications etc.may use to \n    refer to the conformance statement that this resource represents in a logical manner \n    rather than in a literal (URL) fashion \n\n    The identifier should be globally unique - a UUID, an OID, or a URL/URI\n     "
        ]
      },
      "version": "20130510",
      "name": "ACME EHR Conformance statement",
      "status": "draft",
      "experimental": true,
      "publisher": "ACME Corporation",
      "contact": [
        {
          "name": "System Administrator",
          "telecom": [
            {
              "system": "email",
              "value": "wile@acme.org"
            }
          ]
        }
      ],
      "date": "2012-01-04",
      "description": "This is the FHIR conformance statement for the main EHR at ACME for the private interface - it does not describe the public interface",
      "requirements": "Main EHR conformance statement, published for contracting and operational support",
      "copyright": "Copyright © Acme Healthcare and GoodCorp EHR Systems",
      "kind": "instance",
      "software": {
        "name": "EHR",
        "version": "0.00.020.2134",
        "releaseDate": "2012-01-04"
      },
      "implementation": {
        "description": "main EHR at ACME",
        "url": "http://10.2.3.4/fhir"
      },
      "fhirVersion": "1.0.0",
      "_fhirVersion": {
        "fhir_comments": [
          "   while the FHIR infrastructure is turning over prior to development, a version is \n    required. Note that this may be rescinded later?   "
        ]
      },
      "acceptUnknown": "both",
      "_acceptUnknown": {
        "fhir_comments": [
          "   this system accepts unknown content in the resources   "
        ]
      },
      "format": [
        "xml",
        "json"
      ],
      "rest": [
        {
          "fhir_comments": [
            "   in a real conformance statement, it's unlikely that a single conformance statement \n    would declare conformance for REST, messaging and documents, though it is legal. \n    This example does so in order to show all the parts of a conformance statement   "
          ],
          "mode": "server",
          "_mode": {
            "fhir_comments": [
              "   this is a server conformance statement. Note that servers are required to provide \n      one of these. It can easily be edited by hand - copy this, replace the metadata above, \n      delete the messaging and document stuff below, and then replace the details appropriately.   "
            ]
          },
          "documentation": "Main FHIR endpoint for acem health",
          "security": {
            "cors": true,
            "_cors": {
              "fhir_comments": [
                "  cors support is highly recommended - mandatory if using SMART on FHIR "
              ]
            },
            "service": [
              {
                "coding": [
                  {
                    "system": "http://hl7.org/fhir/restful-security-service",
                    "code": "OAuth"
                  }
                ]
              }
            ],
            "description": "Oauth (unspecified version see oauth.net).",
            "certificate": [
              {
                "type": "application/jwt",
                "blob": "IHRoaXMgYmxvYiBpcyBub3QgdmFsaWQ=",
                "_blob": {
                  "fhir_comments": [
                    "  base JWT. this blob is not valid  "
                  ]
                }
              }
            ]
          },
          "resource": [
            {
              "fhir_comments": [
                "   zero or more of these - declaration of support for a resource   "
              ],
              "type": "Patient",
              "profile": {
                "fhir_comments": [
                  "   let's assume that HL7 has stood up a profile registry at http://fhir.hl7.org/fhir \n        - it's likely to have a registry, though this is not decided, nor is a URL decided. \n        This application simply uses a profile registered directly with HL7. For the simplest \n        case of a FHIR REST Server, just delete this profile reference. Profile references do \n        not need to be a UUID, though a profile registry could insist that they are   "
                ],
                "reference": "http://fhir.hl7.org/base/Profile7896271d-57f6-4231-89dc-dcc91eab2416"
              },
              "interaction": [
                {
                  "code": "read"
                },
                {
                  "code": "vread",
                  "documentation": "Only supported for patient records since 12-Dec 2012"
                },
                {
                  "code": "update"
                },
                {
                  "code": "history-instance"
                },
                {
                  "code": "create"
                },
                {
                  "code": "history-type"
                }
              ],
              "versioning": "versioned-update",
              "readHistory": true,
              "updateCreate": false,
              "_updateCreate": {
                "fhir_comments": [
                  "  this server doesn't let the clients create identities  "
                ]
              },
              "conditionalCreate": true,
              "_conditionalCreate": {
                "fhir_comments": [
                  "  it's good to support conditional create on patients; this solves a common middleware problem  "
                ]
              },
              "conditionalUpdate": false,
              "conditionalDelete": "not-supported",
              "_conditionalDelete": {
                "fhir_comments": [
                  "  0..1 If allows/uses conditional update  "
                ]
              },
              "searchInclude": [
                "Organization"
              ],
              "searchRevInclude": [
                "Person"
              ],
              "searchParam": [
                {
                  "name": "identifier",
                  "definition": "http://hl7.org/fhir/SearchParameter/Patient-identifier",
                  "type": "token",
                  "documentation": "Only supports search by institution MRN",
                  "modifier": [
                    "missing"
                  ]
                },
                {
                  "name": "careprovider",
                  "definition": "http://hl7.org/fhir/SearchParameter/Patient-careprovider",
                  "type": "reference",
                  "target": [
                    "Organization"
                  ],
                  "modifier": [
                    "missing"
                  ],
                  "chain": [
                    "name",
                    "identifier"
                  ]
                }
              ]
            }
          ],
          //https://www.hl7.org/fhir/valueset-allergyintolerance-substance-code.html
          "interaction": [
            {
              "code": "allergyintolerance-substance-code"
            },
            {
              "code": "transaction"
            },
            {
              "code": "history-system"
            }
          ],
          "compartment": [
            "http://hl7.org/fhir/compartment/Patient"
          ]
        }
      ],
      "messaging": [
        {
          "fhir_comments": [
            "   a messaging conformance statement. Applications are not required to make a conformance \n    statement with regard to messaging, though there is active argument that they should.    "
          ],
          "endpoint": [
            {
              "protocol": {
                "system": "http://hl7.org/fhir/message-transport",
                "code": "mllp"
              },
              "address": "mllp:10.1.1.10:9234",
              "_address": {
                "fhir_comments": [
                  "  LLP server at 10.1.1.10 on port 9234  "
                ]
              }
            }
          ],
          "reliableCache": 30,
          "documentation": "ADT A08 equivalent for external system notifications",
          "event": [
            {
              "code": {
                "system": "http://hl7.org/fhir/message-type",
                "code": "admin-notify"
              },
              "category": "Consequence",
              "mode": "receiver",
              "_mode": {
                "fhir_comments": [
                  "   this a receiver - i.e. answers. Not neccessariy a server (though this is)   "
                ]
              },
              "focus": "Patient",
              "request": {
                "fhir_comments": [
                  "   specify a profile for the request person. Very often there's no \n        point profiling the response, it's not interesting   "
                ],
                "reference": "StructureDefinition/daf-patient"
              },
              "response": {
                "reference": "StructureDefinition/MessageHeader"
              },
              "documentation": "Notification of an update to a patient resource. changing the links is not supported"
            }
          ]
        }
      ],
      "document": [
        {
          "fhir_comments": [
            "   a document conformance statement   "
          ],
          "mode": "consumer",
          "documentation": "Basic rules for all documents in the EHR system",
          "profile": {
            "fhir_comments": [
              "   this is the important element: a reference to a published document profile \n       note that this is a version specific reference.  "
            ],
            "reference": "http://fhir.hl7.org/base/Profilebc054d23-75e1-4dc6-aca5-838b6b1ac81d/_history/b5fdd9fc-b021-4ea1-911a-721a60663796"
          }
        }
      ]
    });
  });
}