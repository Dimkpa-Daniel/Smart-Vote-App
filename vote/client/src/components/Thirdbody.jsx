
import React, { useState } from 'react'
// import contest5 from '../assets/male contestant 1.jpg'
import _ from 'lodash'
import { Button, Card, Divider, Image, Placeholder, Header, Icon, Modal  } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


const cards = [
  {
      id: 1,
      avatar: '/images/avatar/large/helen.jpg',
      header: 'Mr. Peter Akaliro',
      description: 'Web developer',
  },
  {
      id: 2,
      avatar: '/images/avatar/large/matthew.png',
      header: 'Mr. David Sampson',
      description: 'Web developer',
  },
  {
      id: 3,
      avatar: '/images/avatar/large/molly.png',
      header: 'Mr. Bryan',
      description: 'UI/UX designer',
  },
]

const Thirdbody = () => {
  const [loading, setLoading] = useState(false);
  const [voteForA, setVoteForA] = useState(0);
  const [voteForB, setVoteForB] = useState(0);
  const [voteForC, setVoteForC] = useState(0);
  const [voted, setVoted] = useState(false);
  const [open, setOpen] = useState(false)


 
    return (
     
        <div className="thirdbody">
            
            <h6>Ongoing Voting Exercise</h6>
      <h5>Instructor of the year 2021</h5>
      <p><b>Note:</b> No multi-votes </p>

      <>
            {voteForA} - {voteForB} - {voteForC}
            {/* <Button loading={loading} onClick={handleLoadingClick} primary>
        Simulate loading
      </Button> */}
            <Divider />

            <Card.Group doubling itemsPerRow={3} stackable>
                {_.map(cards, (card) => (
                    <Card key={card.header}>
                        {loading ? (
                            <Placeholder>
                                <Placeholder.Image square />
                            </Placeholder>
                        ) : (
                            <Image src={card.avatar} />
                        )}

                        <Card.Content>
                            {loading ? (
                                <Placeholder>
                                    <Placeholder.Header>
                                        <Placeholder.Line length='very short' />
                                        <Placeholder.Line length='medium' />
                                    </Placeholder.Header>
                                    <Placeholder.Paragraph>
                                        <Placeholder.Line length='short' />
                                    </Placeholder.Paragraph>
                                </Placeholder>
                            ) : (
                                <>
                                    <Card.Header>{card.header}</Card.Header>
                                    <Card.Meta>{card.date}</Card.Meta>
                                    <Card.Description>{card.description}</Card.Description>
                                </>
                            )}
                        </Card.Content>

                        <Card.Content extra>
                            <Button
                             disabled={voted}
                                onClick={() => 
                                    [card.id === 1 ? setVoteForA(voteForA + 1) 
                                    : card.id === 2 ? setVoteForB(voteForB + 1) 
                                    : setVoteForC(voteForC + 1), setVoted(true), 
                                    setOpen(true)
                                ]}
                                primary>
                               Vote
                            </Button>
                         
                        </Card.Content>
                    </Card>
                ))}
            </Card.Group>

{/* FOR MY MODAL */}

<Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
    //   trigger={<Button>Basic Modal</Button>}
    >
      <Header icon>
        <Icon name='archive' />
        You are about to vote for this candidate
      </Header>
      <Modal.Content>
        <p>
         Are you sure this is the candidate you want to vote for?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={() => setOpen(false) }>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
        </>
      
     
{/* <div className="container d-container2 d-Vcontainer">

<div className="row d-row2 d-Vrow">
        <div className="col-6 col-md-4 dcol6 d-md">
          <img src={contest5} className="rounded-circle d-image d-Vimg" alt="..." />
        </div>
        <div className="col-6 col-md-4 d-col6 d-md2">
          <p className="card-text d-text d-Vtext"><b>Charles Clifford</b> <br /> UI/UX Designer</p>
          <button   type="button" class="btn btn-warning d-btn d-vbtn">VOTE</button>
        </div>
        
      </div>

      <div className="row d-row2 d-Vrow">
        <div className="col-6 col-md-4 dcol6 d-md">
          <img src={contest5} className="rounded-circle d-image d-Vimg" alt="..." />
        </div>
        <div className="col-6 col-md-4 d-col6 d-md2">
          <p className="card-text d-text d-Vtext"><b>Charles Clifford</b> <br /> UI/UX Designer</p>
          <button type="button" class="btn btn-warning d-btn d-vbtn">VOTE</button>
        </div>
        
      </div>

      <div className="row d-row2 d-Vrow">
        <div className="col-6 col-md-4 dcol6 d-md">
          <img src={contest5} className="rounded-circle d-image d-Vimg" alt="..." />
        </div>
        <div className="col-6 col-md-4 d-col6 d-md2">
          <p className="card-text d-text d-Vtext"><b>Charles Clifford</b> <br /> UI/UX Designer</p>
          <button type="button" class="btn btn-warning d-btn d-vbtn">VOTE</button>
        </div>
        
      </div>

</div> */}

    </div>

    )
}


export default Thirdbody
